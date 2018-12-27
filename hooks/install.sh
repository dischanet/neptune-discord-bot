#!/bin/bash

cd /home/ec2-user/repos/neptune-discord-bot

ZONE=$(curl 169.254.169.254/latest/meta-data/placement/availability-zone)
REGION=$(echo ${ZONE/%?/})
PARAMETER_NAME=NEPTUNE_DISCORD_BOT_SECRET
echo "DISCORD_BOT_TOKEN=$(aws --region ${REGION} ssm get-parameters --name ${PARAMETER_NAME} --query "Parameters[0].Value" --output text)" > environment

sudo cp ./hooks/neptune-discord-bot.service /etc/systemd/system/neptune-discord-bot.service
sudo /usr/bin/systemctl enable neptune-discord-bot