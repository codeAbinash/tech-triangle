#!/bin/bash

base_url="https://cosmicdashboard.com/images"
prefix="moon"
start=1
end=28

for i in $(seq $start $end)
do
    url="${base_url}/${prefix}-${i}.png"
    filename="${prefix}-${i}.png"
    
    echo "Downloading ${filename}..."
    curl -o "./moon/$filename" "$url"
    
    if [ $? -eq 0 ]; then
        echo "Successfully downloaded ${filename}"
    else
        echo "Failed to download ${filename}"
    fi
done

echo "Download complete!"