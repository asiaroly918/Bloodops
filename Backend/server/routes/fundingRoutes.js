                                                                                                                                                          const express = require("express");
                                                                                                                                                          const router = express.Router();

                                                                                                                                                          const {
                                                                                                                                                            createPaymentIntent,
                                                                                                                                                            createFunding,
                                                                                                                                                            getAllFundings,
                                                                                                                                                          } = require("../controllers/fundingController");

                                                                                                                                                          router.post(
                                                                                                                                                            "/create-payment-intent",
                                                                                                                                                            createPaymentIntent
                                                                                                                                                          );

                                                                                                                                                          router.post(
                                                                                                                                                            "/",
                                                                                                                                                            createFunding
                                                                                                                                                          );

                                                                                                                                                          router.get(
                                                                                                                                                            "/",
                                                                                                                                                            getAllFundings
                                                                                                                                                          );

                                                                                                                                                          module.exports = router;