# 生成自签名证书以及设置密码步骤

**生成自签名证书步骤**

**CA 证书** (`myCA.cer`)、**服务器私钥** (`server.key`)  和  **服务器证书** (`server.cer`)

1、创建 CA 证书 1.1、通过 rsa 算法生成 2048 位长度的秘钥

```shell
openssl genrsa -out myCA.key 2048
```

1.2、通过秘钥加密机构信息形成公钥(设置有效期 365 天)：

```shell
openssl req -new -x509 -key myCA.key -out myCA.cer -days 365
```

2、创建服务器证书

2.1、通过 openssl 工具创建服务器的秘钥

```shell
openssl genrsa -out server.key 2048
```

2.2、创建一个签名请求，需要指定一个配置文件

```shell
openssl req -config openssl.cnf -new -out server.req -key server.key
```

2.3、通过 CA 机构证书对服务器证书进行签名认证(设置有效期 365 天)

```shell
openssl x509 -req -extfile openssl.cnf -extensions v3_req -in server.req -out server.cer -CAkey myCA.key -CA myCA.cer -days 365 -CAcreateserial -CAserial serial
```

对于 openssl.cnf 文件，不同域名修改\[alt_names\]字段即可

openssl.cnf：

```plaintext
tsa_policy2 = 1.2.3.4.5.6
tsa_policy3 = 1.2.3.4.5.7
[ ca ]
default_ca = CA_default  # The default ca section
[ CA_default ]
dir  = ./demoCA  # Where everything is kept
certs  = $dir/certs  # Where the issued certs are kept
crl_dir  = $dir/crl  # Where the issued crl are kept
database = $dir/index.txt # database index file.
new_certs_dir = $dir/newcerts  # default place for new certs.
certificate = $dir/cacert.pem  # The CA certificate
serial  = $dir/serial   # The current serial number
crlnumber = $dir/crlnumber # the current crl number
crl  = $dir/crl.pem   # The current CRL
private_key = $dir/private/cakey.pem# The private key
RANDFILE = $dir/private/.rand # private random number file
x509_extensions = usr_cert  # The extentions to add to the cert
name_opt  = ca_default  # Subject Name options
cert_opt  = ca_default  # Certificate field options
default_days = 365   # how long to certify for
default_crl_days= 30   # how long before next CRL
default_md = default  # use public key default MD
preserve = no   # keep passed DN ordering
policy  = policy_match
[ policy_match ]
countryName  = match
stateOrProvinceName = match
organizationName = match
organizationalUnitName = optional
commonName  = supplied
emailAddress  = optional
[ policy_anything ]
countryName  = optional
stateOrProvinceName = optional
localityName  = optional
organizationName = optional
organizationalUnitName = optional
commonName  = supplied
emailAddress  = optional
[ req ]
default_bits  = 1024
default_keyfile  = privkey.pem
distinguished_name = req_distinguished_name
attributes  = req_attributes
x509_extensions = v3_ca # The extentions to add to the self signed cert
string_mask = utf8only
req_extensions = v3_req # The extensions to add to a certificate request
[ req_distinguished_name ]
countryName   = Country Name (2 letter code)
countryName_default  = CN
countryName_min   = 2
countryName_max   = 2
stateOrProvinceName  = State or Province Name (full name)
stateOrProvinceName_default = BeiJing
localityName   = Locality Name (eg, city)
0.organizationName  = Organization Name (eg, company)
0.organizationName_default = myca
organizationalUnitName  = Organizational Unit Name (eg, section)
commonName   = Common Name (e.g. server FQDN or YOUR name)
commonName_max   = 64
emailAddress   = Email Address
emailAddress_max  = 64
[ req_attributes ]
challengePassword  = A challenge password
challengePassword_min  = 4
challengePassword_max  = 20
unstructuredName  = An optional company name
[ usr_cert ]
basicConstraints=CA:FALSE
nsCertType = client, email, objsign
keyUsage = nonRepudiation, digitalSignature, keyEncipherment
nsComment   = "OpenSSL Generated Certificate"
subjectKeyIdentifier=hash
authorityKeyIdentifier=keyid,issuer
[ svr_cert ]
basicConstraints=CA:FALSE
nsCertType   = server
keyUsage = nonRepudiation, digitalSignature, keyEncipherment, dataEncipherment, keyAgreement
subjectKeyIdentifier=hash
authorityKeyIdentifier=keyid,issuer
extendedKeyUsage = serverAuth,clientAuth
[ v3_req ]
subjectAltName = @alt_names
# 这里是重点，需要将里面配置为最终服务端需要的域名或者IP
# 这里可以写多个，能够自行添加DNS.X = XXXXXX
[ alt_names ]
DNS.1 = lms.anam.gob.mx
DNS.2 = *.lms.anam.gob.mx
IP.1 = 10.1.0.88
[ v3_ca ]
subjectKeyIdentifier=hash
authorityKeyIdentifier=keyid:always,issuer
basicConstraints = CA:true
[ crl_ext ]
authorityKeyIdentifier=keyid:always
[ proxy_cert_ext ]
basicConstraints=CA:FALSE
nsComment   = "OpenSSL Generated Certificate"
subjectKeyIdentifier=hash
authorityKeyIdentifier=keyid,issuer
proxyCertInfo=critical,language:id-ppl-anyLanguage,pathlen:3,policy:foo
[ tsa ]
default_tsa = tsa_config1 # the default TSA section
[ tsa_config1 ]
dir  = ./demoCA  # TSA root directory
serial  = $dir/tsaserial # The current serial number (mandatory)
crypto_device = builtin  # OpenSSL engine to use for signing
signer_cert = $dir/tsacert.pem  # The TSA signing certificate
     # (optional)
certs  = $dir/cacert.pem # Certificate chain to include in reply
     # (optional)
signer_key = $dir/private/tsakey.pem # The TSA private key (optional)
default_policy = tsa_policy1  # Policy if request did not specify it
     # (optional)
other_policies = tsa_policy2, tsa_policy3 # acceptable policies (optional)
digests  = md5, sha1  # Acceptable message digests (mandatory)
accuracy = secs:1, millisecs:500, microsecs:100 # (optional)
clock_precision_digits  = 0 # number of digits after dot. (optional)
ordering  = yes # Is ordering defined for timestamps?
    # (optional, default: no)
tsa_name  = yes # Must the TSA name be included in the reply?
    # (optional, default: no)
ess_cert_id_chain = no # Must the ESS cert id chain be included?
    # (optional, default: no)

```

3、信任 CA 证书(windows 安装 myCA.cer)

**加密证书步骤**

将  CRT  和  KEY  文件结合并加密(设置的密码是导出密码)：

```plaintext
openssl pkcs12 -export -out ulearning.app.p12 -inkey ulearning.app.key -in ulearning.app.crt
```

然后可以将  `.p12`  文件转换为  PEM  格式，并设置密码(设置的密码是加密密钥的密码)：

```plaintext
openssl pkcs12 -in ulearning.app.p12 -out ulearning.app_with_password.pem
```

手动重新设置 pem 的密码

```plaintext
openssl rsa -in ulearning.app.key -out ulearning.app_with_password.pem -aes256
```

生成 pfx

openssl pkcs12 -export -out server.pfx -inkey server.key -in server.cer -certfile myCA.cer

验证密码

openssl pkcs12 -info -in server.pfx
