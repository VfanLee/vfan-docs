# 部署 openAI

1. 准备 [openAI](https://platform.openai.com/account/api-keys) 的 API key。

2. 一键安装 docker

```sh
curl -fsSL https://get.docker.com -o get-docker.sh 
sh get-docker.sh
```

3. 使用 [chatgpt-web](https://github.com/Chanzhaoyu/chatgpt-web) 进行搭建 ChatGPT。

```sh
docker run --name chatgpt-web -p 3002:3002 --env OPENAI_API_KEY=YOUR_KEY --restart always -d chenzhaoyu94/chatgpt-web:latest
```
