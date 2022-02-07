---
home: true
title: RAKwireless API Documentation
description: RAKwireless Unified Interface (RUI) is the standard interface defined to simplify the firmware development for the ecosystem of the hardware of RAK. RUI defines an API that abstracts the complexity of the hardware layer. Through the RUI API, users can control all the functionalities of the module without the need to deal with the complexity of low-level hardware protocols such as SPI, I2C, etc.
heroImage: /rakwireless/RAK-only-gray.png
actionText: Check API documentation
actionLink: rui
footer: Open Source on [GitHub](https://github.com/sqrthree/vuepress-theme-api), Made by [@sqrthree](https://github.com/sqrthree), Power by [vuepress](https://github.com/vuejs/vuepress).
---
# Overview

RAKwireless is a leading provider of low-power, wide-area Internet of Things (IoT) solutions in the industry. It provides from basic modules to complex but modular solutions for the IoT, smart city, and smart agriculture sectors.

In the field of LoRa communication, RAKwireless has launched RAK811, RAK4200, RAK4270, RAK4600, and other communication modules with LoRaWAN and Lora P2P functions.

RAK's LoRaWAN node modules support not only out-of-the-box integration through the use of traditional AT commands, but also allows users to customize the firmware and access to the functionalities of the internal MCU. Users can adapt and extend the logic in the firmware to meet the requirements of their own solution.

This document is aimed at developers who are familiar with the hardware of the RAK LoRaWAN module but want to extend its functionalities through customized versions of the firmware. In the following sections, the concept of the RAKwireless Unified Interface (RUI) API is introduced and explanations about how to extend the existing functionalities of the modules are provided. 

Currently, the supported LoRaWAN modules are:
*	RAK811 LoRaWAN module
*	RAK4200 LoRaWAN module
*	RAK4270 LoRaWAN module
*	RAK4600 LoRaWAN module
*	Other complex modules that have the above modules inside, such as, RAK5205, RAK7204, etc.


:::tip 📝 NOTE:
The content of this document applies to modules with firmware version **3.x.x.14** and **above**.   
If it is lower than this version, please refer to the link below.
[https://downloads.rakwireless.com/RUI/RUI_RAK_LoRaWAN_OpenMCU_Development_Guide-V4.0.pdf](RUI RAK LoRaWAN OpenMCU_Development_Guide-V4.0.pdf)
:::

