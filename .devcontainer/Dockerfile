FROM oven/bun:debian

# Config Bun
ENV PATH="~/.bun/bin:${PATH}"
RUN ln -s /usr/local/bin/bun /usr/local/bin/node

# Update packages and install required dependencies
RUN apt-get update && apt-get install -y \
    git \
    sudo \
    wget \
    unzip \
    && rm -rf /var/lib/apt/lists/*
