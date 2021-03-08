

```

01
Which transport protocol is considered a Best Effort delivery system?
SPX
IP
UDP v
TCP x
02
True or False: LLDP is an open standard.
True v
False x
03
What do we use to divide an already subnetted network into smaller subnets?
Prefix
VLSM v
Can't be done
DNS x
04
LLDP can discover a neighbor, provided that the neighbor is running LLDP and that the neighbor is which of the following types of devices?
Router
Linux Server
IP phone
All of the above v
05
What class is the following address: 197.24.54.2
Class D
Class C v
Class B x
Class A

06
What service translates a FQDN to an IP address?
TFTP
DNS v
WINS
FTP
07
How many devices will LLDP discover per interface?
As many that are connected to the interface
Just 2, the IP phone and a computer
Just 1, whatever device is physically closest v
Just 3, if the devices are all connected through a hub then to the switchport x
08
TCP takes a large stream of data and subdivides it into small chunks to be reassembled later. This is called what?
Fragmentation
VLSM
Subnetting x
Segmentation v
09
What is needed to show that a classfull address has been subnetted?
Routing Table
Host Address
Documentation
Subnet Mask v
10
33
What command uses an echo to verify end-to-end connectivity?
IP
ICMP
Traceroute
Ping v

What command on a Windows PC will show you the IP to MAC address mappings?
Arp -d
Ping
Traceroute
Arp -a v

What route should be in the routing table to match all traffic that can't find a better route?
Static route
Unknown route
Broadcast path
Default route v

True or False: Interfaces that connect to an end-system, or another switch, do not have to have the same duplex settings for full functionality.
True
False v

How do you verify the L2 forwarding table used by a Cisco switch?
Arp -d
Arp -a
Show mac
Show table

How do you verify the L2 forwarding table used by a Cisco switch?
Arp -d
Arp -a
Show mac v
Show table
 
 What command is used to determine the logical path a packet travels in your network?
ICMP
Traceroute
Ping
IP
 
traceroute 
 
 
 
 An IPv6 Link-Local address will start with which 2-bytes?
FF00::/3
FE80::/4 v
2001::/3
FFFE::/4
 
 What service translates a hostname or FQDN to an IP address?
Traceroute
DHCP
DNS v
STP
 
 What router command shows you a list of the best IP routes?
Show forwarding table
Show IP route v
Show mac address-table
Show route
 
True or False: An Access-List will block traffic going through a router.
True
False v

3

What parameters must you specify when you enable EIGRP routing?
EIGRP routing, network number, and AS number м
The broadcast address and AS number
The network number and AS number
EIGRP routing, network number, and passive interface


A router has EIGRP configured as the only routing protocol. How does EIGRP respond if there is no feasible successor route to a destination network and the successor route fails?
EIGRP sends a Hello packet to the DR to inform it of the route failure
It immediately sends its entire routing table to its neighbors
It automatically forwards traffic to a fallback default route until a successor route is found 
It sends queries out to neighbors until a new successor route is found

True or False: All routes used as successors must be of equal value to the same destination in order to do load balancing.
True
False v

In EIGRP, what is a feasible successor (FS) and where is it stored?
A FS is a primary route, stored in the topology table
A FS is a backup route, stored in the routing table
A FS is a primary route, stored in the routing table
A FS is a backup route, stored in the topology table v

What is EIGRP's default administrative distance (AD)?
110
100
90 v
120

You need to implement the use of a routing protocol that meets the following requirements: 1. Converges quickly. 2. Supports VLSM, CIDR, IP, and IPX. 3. Uses minimal bandwidth for routing updates. Which one of the following routing protocols would be the best choice?
RIPv1
RIPv2
IGRP
EIGRP v

Where can route summarization occur with EIGRP?
Only at a network area boundary
Only at a classful boundary
Anywhere in the network v
Only at the AS boundary

A router learns about a remote network from EIGRP, OSPF, and a static route. Assuming all routing protocols are using their default administrative distance, which route will the router use to forward data to the remote network?
The router will load balance and use all three routes
The router will use the static route v
The router will use the OSPF route
The route will use the EIGRP route


You need to configure a single router into load balancing traffic across 4 unequal cost paths. Which routing protocol can satisfy this requirement?
OSPF
EIGRP v
RIP v2
IS-IS

You need to choose a routing protocol for a new company network. This network will be running IP, IPX, and Appletalk. You wish to utilize only one routing protocol. Which one would be the best choice?
IGRP
RIP v2
EIGRP v
OSPF

5 =========================================
PPPoE encapsulates Layer 2 PPP into what other Layer 2 encapsulation?
MPLS
Frame-relay
Ethernet v
ATM

Which of the following are benefits of MLP?
All of the above
Traffic filtering v
Load balancing
Higher port density

True or False: You can manually configure the frame-relay mapping.
True v
False

Which of the following is not one of the multipoint types of frame relay?
It may appear to be similar to Ethernet but this is an NBMA network
Each end of the subinterface must be in the same subnet v
All destinations can be reached on the same subnet (if the PVCs have been created)
Can be used with full- or partial-mesh topology

Which type of physical interfaces do routers use for PPP connections to other routers?
Sonet
Gigabit Ethernet
Fast Ethernet
Serial v

What type of virtual interface must be configured for your router to be a PPPoE client?
Virtual-dialer interface
Dialer-pool
VLAN interface
Dialer interface v

True or False: The physical interface used for PPPoE will communicate to the service provider with an IP packet.
True
False v

Which of the following is a critical function for any security protocol?
All of the above v
Confidentiality
Data Integrity
Authentication

What type of virtual interface is needed to configure the IP address of your MLP bundle?
Multilink interface v
Serial interface
VLAN interface
Dialer interface

Which of the following is not part of the GRE implementation plan?
Specify the tunnel source and destination IP address
Create a tunnel interface
Make up IP addresses v
Specify GRE Tunnel mode as a configuration option

6 ===========================================
Where, by default, is the startup-config stored?
ROMMON
NVRAM v
Flash
TFTP

What command would save your startup-config to a TFTP server?
Write startup TFTP
Copy startup-config TFTP v
Copy TFTP startup-config
Write TFTP startup

True or False: Upgrading the IOS will require a reboot of the router.
True v
False

True or False: Flash can only contain one IOS image at a time, even if there's plenty of space for another.
True
False v

By default, where is the bootable version of the IOS stored on a router?
ROMMON
Flash v
NVRAM
TFTP

Which port of the router must you use to conduct a password recovery?
VTY lines
Ethernet ports
Management port
Console port v

What is the most common configuration register value for following the boot system commands first, and then looking to flash for the initial IOS image?
2100
2101
2102 What is the most common configuration register value for following the boot system commands first, and then looking to flash for the initial IOS image?
2100
2101
2102
2142
2142

You must change the value of the configuration register while in ROMMON mode so that the startup configuration will not be loaded on the next reboot. What must you change the value to?
0x2102
0x2100
0x2122
0x2142 v

What is the generic name for a server that accepts logging information from a router?
SNMP
Syslog v
SIM
NMS

While performing this password recovery, you will have to interrupt the boot-up process. When you do this, what mode will you be in?
Privilege Exec
User Exec
ROMMON v
Configuration Mode




```