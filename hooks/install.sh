#!/bin/bash

cd /home/ec2-user/repos/neptune-discord-bot

REGION=$(curl -s 169.254.169.254/latest/meta-data/local-hostname | cut -d '.' -f2)
PARAMETER_NAME=NEPTUNE_DISCORD_BOT_SECRET
echo "DISCORD_BOT_TOKEN=$(aws --region ${REGION} ssm get-parameter --name ${PARAMETER_NAME} --query "Parameter.Value" --output text)" > environment

cp ./hooks/neptune-discord-bot.service /etc/systemd/system/neptune-discord-bot.service
/usr/bin/systemctl enable neptune-discord-bot