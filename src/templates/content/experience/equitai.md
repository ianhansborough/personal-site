---
type: "exp"
path: "/equitai"
tileImage: "https://s3.us-east-2.amazonaws.com/portfolio-assets-ianhansborough/personal-site/equitai-logo.svg"
jtImage: "https://s3.us-east-2.amazonaws.com/portfolio-assets-ianhansborough/equitai/jt-image.png"
name: "Equitai.ml"
tagline: "Predictive equity ranking API"
location: "Columbus, OH"
role: "Developer"
startDate: "2018-09"
endDate: "2019-01"
---

I was contracted to build the Euqitai.ml API by a hedge fund here in Columbus (can’t publicly mention names for legal reasons). They had uncovered some interesting research regarding the economic factors that drive debt repayment among small-to-mid sized leveraged equities, and in turn hired me to build a ML model that would rank these types of stocks based on their predicted likelihood of debt repayment.

![](https://s3.us-east-2.amazonaws.com/portfolio-assets-ianhansborough/equitai/home-image.png)

I went about implementing the model using a gradient boosted trees classifier from the XGBoost python library. I started by pulling in 20+ years of historical market data from the CRSP database; I pruned and prepped it using the standard numpy/pandas/scipy stack.

Most of the feature engineering that I performed as part of the data prep process was based on factors that were outlined in the research that I received from the hedge fund.

![](https://s3.us-east-2.amazonaws.com/portfolio-assets-ianhansborough/equitai/feature-engineering.png)

As I began to actually train the model and tune parameters, I was able to generate feature importance plots in order to verify that the model was acting sensibly (or at least in line with the research).

![](https://s3.us-east-2.amazonaws.com/portfolio-assets-ianhansborough/equitai/feature-importance.png)

After training the model, I was able to verify its efficacy by generating a 3-fold cross validated ROC plot. This not only showed the model was working, but also gave context to the model’s confidence ratings in terms of objective accuracy and precision.

![](https://s3.us-east-2.amazonaws.com/portfolio-assets-ianhansborough/equitai/roc-curve.png)

In addition, I backtested the model against 10 years of stock data from CapIQ. In this backtest, the model formed annual portfolios of the 20 best ranked stocks, and held them for a year. The model produced a whopping 20%+ annualized return over the 10 year span.

Finally, I exposed the model via a dockerized REST API that I implemented using python’s Flask web framework, served via a guicorn application server and nginx reverse proxied web server.

![](https://s3.us-east-2.amazonaws.com/portfolio-assets-ianhansborough/equitai/api-docs-2.png)

This project was my first production-grade ML build. I learned a ton and will definitely be looking to dive deeper into the ML/AI field on future projects.
