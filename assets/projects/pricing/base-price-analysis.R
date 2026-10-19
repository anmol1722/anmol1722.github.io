####################
# Base Price Analysis


## Load Packages and Set Seed
set.seed(1)
## Read in the base price analysis data

BasePriceAnalysis <- read.csv(file.choose())  ## Choose the file grocery_detergent_data.csv
head(BasePriceAnalysis)
str(BasePriceAnalysis)

## Remove promotions
BasePriceAnalysis_nopromo <- BasePriceAnalysis[BasePriceAnalysis$promoflag == 0,]
nrow(BasePriceAnalysis_nopromo)

## Tide 128
m_tide128 <- lm(
  formula = log(q_tide128) ~ log(p_tide128) + log(p_tide64) + log(p_wisk64) +
    week + factor(store),
  data = BasePriceAnalysis_nopromo
)

summary(m_tide128)




## Tide 64
m_tide64 <- lm(
  formula = log(q_tide64) ~ log(p_tide128) + log(p_tide64) + log(p_wisk64) +
    week + factor(store),
  data = BasePriceAnalysis_nopromo
)

summary(m_tide64)

## Wisk 64
m_wisk64 <- lm(
  formula = log(q_wisk64) ~ log(p_tide128) + log(p_tide64) + log(p_wisk64) +
    week + factor(store),
  data = BasePriceAnalysis_nopromo
)

summary(m_wisk64)
