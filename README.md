# headliner

```
ssh -i headlinerKey.pem ec2-user@ec2-18-236-130-80.us-west-2.compute.amazonaws.com
```

```
scp -i headlinerKey.pem /file/path/file.txt ec2-user@ec2-18-236-130-80.us-west-2.compute.amazonaws.com:
```

take note of the colon at the end of the address. This will copy to the home directory of the instance  

#Installing Docker
sudo yum update -y
sudo yum install -y docker
sudo service docker start
sudo usermod -a -G docker ec2-user
log out then back in then
docker info

#Docker-compose
```
curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose
```

more info
```
https://medium.com/@khandelwal12nidhi/docker-setup-on-aws-ec2-instance-c670ff3d5f1b
```

#EC2 Instance Info
instance id:
```
i-0c736fd910a3d3326
```
public dns:
```
ec2-18-236-130-80.us-west-2.compute.amazonaws.com
```
public ipv4
```
18.236.130.80
```