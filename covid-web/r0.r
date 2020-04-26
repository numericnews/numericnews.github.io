# R 3.6

# install.packages("devtools")
# devtools::install_github("reconhub/earlyR")

# install.packages("rjson")

json <- rjson::fromJSON(file="/tmp/covid-web-velocity.json")

# vector of velocities
v <- json$y

mean = 7.5
sd = 3.4

R <- numeric(length(v)) * NA
reset <- numeric(length(v)) * NA

i <- 1
while(i < length(v)) {

    for (j in i:length(v)) {

        if (j-i+1 < mean - sd) {
            # do not consider too small ranges
            R[j] <- NA
        } else if (all(v[i:j] == 0)) {
            # no new infections in the the whole interval. It does not make sense to calculate R0 here.
            R[j] <- NA
        } else {
            res <- earlyR::get_R(v[i:j], si_mean = mean, si_sd = sd)

            if (length(res$R_ml)==1) {
                R[j] <- res$R_ml
            } else {
                # here earlyR does not return anything. Reset the calculation starting from day j.
                i <- j
                reset[j] <- 1
                break
            }
        }
    }

    if (j == length(v))
        break
}

# write.csv(data.frame(r=R,reset=reset), "/tmp/lombardia-r0.csv")
f <- file("/tmp/covid-web-r0.json", "w")
cat(rjson::toJSON(list(x=json$x, r0=R, reset=reset)), file=f)
close(f)
