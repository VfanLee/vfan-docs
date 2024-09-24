# VMWare Workstation

## 虚拟机磁盘格式

1. IDE(I)

    IDE 即 Integrated Drive Electronics，它的本意是指把控制器与盘体集成在一起的硬盘驱动器，IDE是表示硬盘的传输接口。我们常说的IDE接口，也叫ATA（Advanced Technology Attachment）、PATA接口，现在PC机使用的硬盘大多数都是IDE兼容的，只需用一根电缆将它们与主板或接口卡连起来就可以了。

    优点：易于使用、价格低廉、兼容性强、性价比高等

    缺点：速度慢、只能内置使用、不支持热插拔、冗错性差、功耗高、影响散热及连接线长度有限等

2. SCSI(S)

    SCSI硬盘是采用SCSI接口的硬盘，SCSI是Small Computer System Interface（小型计算机系统接口）的缩写，使用50针接口，外观和普通硬盘接口有些相似。

    优点：性能好、稳定性高、硬盘转速快、缓存容量大、CPU占用率低、扩展性远优于IDE硬盘、支持热插拔

    缺点：价格昂贵

3. SATA(A)

    SATA，即Serial ATA（串行 ATA），全称是Serial Advanced Technology Attachment，是由Intel、IBM、Maxtor 和 Seagate等公司共同提出的硬盘接口新规范。因为采用串行连接方式，所以使用 SATA 接口的硬盘又叫串口硬盘。

    优点：支持热插拔 、传输速度快、执行效率高、结构简单

    缺点：机械性能不强，可维护性不强

4. NVMe(V)

    NVMe是一种接口协议，不是指的接口，NVMe标准是面向PCI-E固态硬盘的，解除了旧标准施放在SSD上的各种限制。

    优点：支持所有常见的操作系统、良好的可拓展性、具有低延迟，低能耗，高性能等优点、自动功耗状态切换和动态能耗管理功能大大降低功耗、解决了不同PCIe SSD之间的驱动适用性问题

    缺点：价格昂贵

## vmkd 格式转换 qcow2

准备工作：

1. 下载安装 [qemu](https://qemu.weilnetz.de/w64/)

操作步骤：

1. 完整克隆 ubuntu 虚拟机，复制 ubuntu.vmdk 的完整路径
2. 进入 VMware 安装目录，找到 vmware-vdiskmanager.exe，在命令行窗口中输入如下命令：

    ```sh
    # 说明：vmware-vdiskmanager.exe -r "源地址" -t 0 "转换后的目标地址"
    vmware-vdiskmanager.exe -r "D:\...\ubuntu\ubuntu-20.04.6-cl3.vmdk" -t 0 "D:\...\ubuntu.vmdk"
    ```

3. 等待转换，当出现如下信息，说明转换成功：
 Convert: 100% done.
Virtual disk conversion successful.
4. 进入 QEMU 安装目录，找到 qemu-img.exe，在命令行窗口中输入如下命令：

    ```sh
    # 说明：qemu-img.exe convert -p -f vmdk -O qcow2 "源 vmdk 文件" "转换后的 qcow2 文件"
    qemu-img.exe convert -p -f vmdk -O qcow2 "D:\...\ubuntu.vmdk" "D:\...\ubuntu.qcow2"
    ```

5. 等待转换完成，当进度为 100% 时说明转换完成。
