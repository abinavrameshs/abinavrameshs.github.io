---
title: "Face Detection on FPGA"
slug: face-detection
order: 15
featured: false
category: "Computer Vision"
summary: "Real-time face detection prototyped in MATLAB and deployed to a ZedBoard with a Xilinx Zynq-7000 SoC."
image: assets/img/portfolio/face-detection.svg
alt: "Face Detection on FPGA"
tags: ["MATLAB", "ZedBoard", "Xilinx Zynq-7000"]
---

## Objective

An undergraduate embedded-systems project (National Institute of Technology Karnataka) to implement real-time face detection on dedicated hardware rather than a general-purpose CPU - built with Pramod K. and Mohan Rao Divate Kodandarama.

## Approach

### Algorithm development

The face detection algorithm was developed and validated in MATLAB before being ported to hardware.

### Hardware implementation

Deployed onto a ZedBoard (Xilinx Zynq-7000 SoC dev board), which pairs an ARM processor with FPGA fabric - letting the image-processing pipeline run closer to the sensor with lower latency than a pure software implementation.
