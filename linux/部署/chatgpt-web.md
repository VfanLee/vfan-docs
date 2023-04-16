# chatgpt-web

## docker 部署

1. 准备 [openAI](https://platform.openai.com/account/api-keys) 的 API key。

2. 使用 [chatgpt-web](https://github.com/Chanzhaoyu/chatgpt-web) 通过 docker 进行搭建 ChatGPT。

    ```sh
    docker run --name <container_name> -p 3002:3002 --env OPENAI_API_KEY=<your_key> --restart always -d chenzhaoyu94/chatgpt-web:latest
    ```
