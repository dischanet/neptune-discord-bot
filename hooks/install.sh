#!/bin/bash

cd /home/ec2-user/repos/neptune-discord-bot
yarn install --production

if [ "$DEPLOYMENT_GROUP_NAME" == "Development" ]
then
    PARAMETER_NAME=NEPTUNE_DEVELOP_DISCORD_BOT_SECRET
else
    PARAMETER_NAME=NEPTUNE_DISCORD_BOT_SECRET
fi
REGION=$(curl -s 169.254.169.254/latest/meta-data/local-hostname | cut -d '.' -f2)
echo "DISCORD_BOT_TOKEN=$(aws --region ${REGION} ssm get-parameter --name ${PARAMETER_NAME} --query "Parameter.Value" --output text)" > environment

cp ./hooks/neptune-discord-bot.service /etc/systemd/system/neptune-discord-bot.service
systemctl enable neptune-discord-bot