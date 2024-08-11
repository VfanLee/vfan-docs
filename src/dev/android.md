# 安装 Android

## Windows

1. 下载 [Android Studio](https://developer.android.com/studio?hl=zh-cn)。
2. 配置 Android 环境变量：
   1. `ANDROID_HOME`，如：`D:\Software\Android\SDK`；
   2. 将 `ANDROID_HOME` 添加至 Path，`%ANDROID_HOME%\platform-tools`。
3. 下载并解压 [Gradle](https://gradle.org/releases/)。
4. 配置 Gradle 环境变量：
   1. `GRADLE_HOME`，如：`D:\Software\Gradle\gradle-7.6.3`；
   2. 将 `ANDROID_HOME` 添加至 Path，`%GRADLE_HOME%\bin`。

::: details Android Studio 安装文件路径

- 虚拟机：`~/.android/avd`
- 默认 Gradle：`~/.gradle`
- SDK Platforms：`ANDROID_HOME/platforms`
- Android SDK Build-Tools：`ANDROID_HOME/build-tools`
- Android 镜像：`ANDROID_HOME/system-images`

:::
