---
title: "Give your Edge an Adrenaline Boost: Using Kubernetes to Orchestrate FPGAs and GPU"
author: Randy Levensalor
authorURL: http://twitter.com/randy
---

Over the past year, we’ve been experimenting with field-programmable gate arrays (FPGAs) and graphics processing units (GPUs) to improve edge compute performance and reduce the overall cost of edge deployments.

Unless you’ve been under a rock for the past 2 years, you’ve heard all the excitement about edge computing. For the uninitiated, edge computing allows for applications that previously required special hardware to be on customer premises to run on systems located near customers. These workloads require either very low latency or very high bandwidth, which means they don’t do well in the cloud. With many of these low-latency applications, microseconds matter. At CableLabs, we’ve been defining a reference architecture and adapting [Kubernetes](https://kubernetes.io/) to better meet the low-latency needs of edge computing workloads.

CableLabs engineer Omkar Dharmadhikari wrote a blog post in May 2019 called Moving Beyond Cloud Computing to Edge Computing, outlining many of the opportunities for edge computing. If you aren’t familiar with the benefits of edge computing, I’d suggest reading that post before you read further.

## New Features

As part of our efforts around Project Adrenaline, we’ve shared tools to ease the management of hardware accelerators in Kubernetes. These tools are available in the SNAPS-Kubernetes GitHub repository.

* Field-programmable gate array (FPGA) accelerator integration
* Graphics processing unit (GPU) accelerator integration

## Hardware Acceleration

FPGAs and GPUs can be used as hardware accelerators. There are three advantages that we consider when moving a workload to an accelerator:

* Time requirements
* Power requirements
* Space requirements

Time, space and power are all critical for edge deployments. You have limited space and power for each location. The time needed to complete the operation must fall within the desired limits, and certain operations can be much faster running on an accelerator than on a CPU.

Writing applications for accelerators can be more difficult because there are fewer language options than general-purpose CPUs have. Frameworks such as OpenCL attempt to bridge this gap and allow a single program to work on CPUs, GPUs and FPGAs. Unfortunately, this interoperability comes with a performance cost that makes these frameworks a poor choice for certain edge workloads. The good news is that several major accelerator hardware manufacturers are targeting the edge, releasing frameworks and pre-built libraries that will bridge this performance gap over time.

Although we don’t have any hard-and-fast rules today for what workloads should be accelerated and on which platform, we have some general guidelines. Integer (whole number) operations are typically faster on a general-purpose CPU. Floating point (decimal number) are typically faster on GPUs. Bitwise operations, manipulating ones and zeros, are typically faster on FPGAs.

Another thing to keep in mind when deciding where to deploy a workload is the cost of transitioning that workload from one compute platform to another. There’s a penalty for every memory copy, even within the same server. This means that running consecutive tasks within a pipeline on one platform can be faster than running each task on the platform that is best for that task.

## Accelerator Installation Challenges

When you use accelerators such as FPGAs and GPUs, managing the low-level software (drivers) to run them can be a challenge. Additional hooks to install these drivers during the OS deployment have been added to SNAPS-Boot, including examples for installing drivers for some accelerators. We encourage you to share your experiences and help us add support for a broader set of accelerators.

## Co-Innovation

These features were developed in a co-innovation partnership with Altran. We jointly developed the software and collaborated on the proof of concepts. You can discover more about our co-innovation program on our website, which includes information about how to contact CableLabs with a co-innovation opportunity.

## Extending Project Adrenaline

Project Adrenaline only scratches the surface of what’s possible with accelerated edge computing. The uses for edge compute are vast and rapidly evolving. As you plan your edge strategy, be sure to include the capability to manage programmable accelerators and reduce your dependence on single-purpose ASICs. Deploying redundant and flexible platforms is a great way to reduce the time and expense of managing components at thousands or even millions of edge locations.

As part of Project Adrenaline, SNAPS-Kubernetes ties together all these components to make it easy to try in your lab. With the continuing certification of SNAPS-Kubernetes, we’re staying current with releases of Kubernetes as they stabilize. SNAPS-Boot has additional features to easily prepare your servers for Kubernetes. As always, you can find the latest information about SNAPS on the CableLabs SNAPS page.
