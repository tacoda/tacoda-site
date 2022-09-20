+++
title = "Test Doubles"
date = 2022-09-20
template = "page.html"
[taxonomies]
tags = ["testing", "ruby"]
+++

# Types of Test Doubles

- **Dummy:** It is used as a *placeholder* when an argument needs to be filled in.
- **Stub:** It provides fake data to the SUT (System Under Test).
- **Spy**: It records information about how the class is being used.
- **Mock:** It defines an expectation of how it will be used. It will cause a failure if the expectation isn’t met.
- **Fake:** It is an actual implementation of the contract but is unsuitable for production.
