---
order: 15
caption: #what displays in the portfolio grid:
  title: Face Detection
  subtitle: Image Processing, Embedded Systems
  thumbnail: assets/img/portfolio/face-detection.svg

#what displays when the item is clicked:
title: Face Detection
subtitle: Image Processing, Embedded Systems
image: assets/img/portfolio/face-detection.svg #main image, can be a link or a file in assets/img/portfolio
alt: Face Detection

---

## Objective

An undergraduate embedded-systems project (National Institute of Technology Karnataka) to implement real-time face detection on dedicated hardware rather than a general-purpose CPU - built with Pramod K. and Mohan Rao Divate Kodandarama.

## Approach

<u><b>Algorithm development</b></u> :
The face detection algorithm was developed and validated in MATLAB before being ported to hardware.

<u><b>Hardware implementation</b></u> :
Deployed onto a ZedBoard (Xilinx Zynq-7000 SoC dev board), which pairs an ARM processor with FPGA fabric - letting the image-processing pipeline run closer to the sensor with lower latency than a pure software implementation.

{:.list-inline}
- Category: Image Processing, Embedded Systems, Computer Vision
- Tools: MATLAB, ZedBoard (Xilinx Zynq-7000)
