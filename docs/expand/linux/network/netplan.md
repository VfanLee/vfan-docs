# netplan

## 设置静态 IP

1. 编辑 netplan 文件

    可能不同版本配置文件名称不一样，改默认的配置文件就行（目前是：`01-netcfg.yaml`）。

   ```sh
   vi /etc/netplan/01-netcfg.yaml
   ```

2. 配置静态 IP

    ```yml
    network:
      version: 2
      ethernets:
        ens33:
          dhcp4: no
          addresses:
            - 192.168.8.200/24
          gateway4: 192.168.8.1
          nameservers:
            addresses:
              - 8.8.8.8
              - 8.8.4.4
    ```

3. 应用 netplan 配置

   ```sh
   netplan apply
   ```

4. 大功告成
