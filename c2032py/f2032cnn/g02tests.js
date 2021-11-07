let tests = [
  {
    "number": "1",
    "type": "207",
    "asks": [
      "What interface-level command ensures that an interface will process incoming LLDP frames?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "lldp receive",
      "lldp enable",
      "lldp run",
      "lldp all"
    ]
  },
  {
    "number": "2",
    "type": "35",
    "asks": [
      "Which of the following IPv6 address blocks sends packets to a multicast address rather than a unicast address?"
    ],
    "img": [],
    "sentence": [
      "Explanation: The IPv6 Unicast space encompasses the entire IPv6 address range with the exception of ff00::/8, per [RFC4291]"
    ],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "2000::/3",
      "FC00::/7",
      "FF00::/8",
      "FE80::/10"
    ]
  },
  {
    "number": "3",
    "type": "461",
    "asks": [
      "What is the maximum wire speed of a single port on a 48-port Gigabit Ethernet switch?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "1,000 Mbps",
      "48 Gbps"
    ]
  },
  {
    "number": "4",
    "type": "279",
    "asks": [
      "What command assigns an access port to VLAN 10?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "switchport vlan 10",
      "switchport mode vlan 10",
      "switchport assign vlan 10",
      "switchport access vlan 10"
    ]
  },
  {
    "number": "5",
    "type": "402",
    "asks": [
      "Under which configuration mode is the command ip dhcp snooping used to enable DHCP snooping?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "Interface configuration mode",
      "Line configuration mode",
      "Security configuration mode",
      "Global configuration mode"
    ]
  },
  {
    "number": "6",
    "type": "148",
    "asks": [
      "Refer to the exhibit. How does the router manage traffic to 192.168.12.16?"
    ],
    "img": [],
    "sentence": [],
    "listing": [
      "EIGRP: 192.168.2.0/24",
      "RIP: 192 168 2 0/27",
      "OSPF: 192.168.2.0/28"
    ],
    "responses": [
      "C"
    ],
    "variants": [
      "It load-balances traffic between all three routes.",
      "It chooses the EIGRP route because it has the lowest administrative distance.",
      "It chooses the OSPF route because it has the longest prefix inclusive of the destination address.",
      "It selects the RIP route because it has the longest prefix inclusive of the destination address."
    ]
  },
  {
    "number": "7",
    "type": "357",
    "asks": [
      "What level of logging is appropriate for an event where an immediate action is required?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "Emergency",
      "Critical",
      "Error"
    ]
  },
  {
    "number": "8",
    "type": "180",
    "asks": [
      "Which of the following is not a typical feature of cloud services?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "On demand",
      "Dynamic scaling",
      "Auto-administration",
      "Resource pooling"
    ]
  },
  {
    "number": "9",
    "type": "176",
    "asks": [
      "Which of the following is the most costly topology, and the one that requires the highest administrative overhead?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "Full-mesh",
      "Single-homed",
      "Hub-and-spoke"
    ]
  },
  {
    "number": "10",
    "type": "282",
    "asks": [
      "Where is an 802.1 Q tag inserted in a frame?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "Between the Preamble and SFD fields",
      "Between the Source and Destination MAC fields",
      "Between the Source MAC and Type fields",
      "Between the Source MAC and FCS fields"
    ]
  },
  {
    "number": "11",
    "type": "75",
    "asks": [
      "How does a spine-and-leaf architecture allow for scalability in a network when additional access ports are required?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "A leaf switch and a spine switch may be added with redundant connections between them.",
      "A leaf switch may be added with connections to every spine switch.",
      "A spine switch may be added with at least 40 GB uplinks.",
      "A leaf switch may be added with a single connection to a core spine switch."
    ]
  },
  {
    "number": "12",
    "type": "274",
    "asks": [
      "If a switch has seven workstations attached, how many collision domains are created?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "0",
      "1",
      "6",
      "7",
      "8"
    ]
  },
  {
    "number": "13",
    "type": "377",
    "asks": [
      "What is true about banner messages on Cisco routers? (Choose two.)"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B",
      "C"
    ],
    "variants": [
      "You must always use a # symbol to indicate the end of the banner.",
      "Various types of banner messages appear at different times or for different conditions.",
      "You can use ASCII art in them.",
      "They typically are not used for legal warnings."
    ]
  },
  {
    "number": "14",
    "type": "324",
    "asks": [
      "What type of static route is shown in the following example? ip route 172.20.1.0 255.255.255.0 192.168.100.101"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "A static host route",
      "A floating static route",
      "A default route",
      "A network static route"
    ]
  },
  {
    "number": "15",
    "type": "",
    "asks": [
      "What type of static route is shown in the following example? ip route 172.20.1.0 255.255.255.0 192.168.100.101"
    ],
    "img": [],
    "sentence": [
      "Q324. A network static route."
    ],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "A static host route",
      "A floating static route",
      "A default route",
      "A network static route"
    ]
  },
  {
    "number": "16",
    "type": "86",
    "asks": [
      "Which of the following are mandatory actions that must be performed in order for SSH to operate normally on a Cisco switch? (Choose two.)"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D",
      "E"
    ],
    "variants": [
      "IP routing must be enabled.",
      "Telnet must be disabled.",
      "A console password must be configured.",
      "The switch must be running a k9 (crypto) IOS image.",
      "The ip domain-name command must be configured."
    ]
  },
  {
    "number": "17",
    "type": "256",
    "asks": [
      "What wireless standard introduced in 2013 permits a maximum speed of 6.93 Gbps?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "802.11 ax",
      "802.11g",
      "802.11ac",
      "802.11n"
    ]
  },
  {
    "number": "18",
    "type": "219",
    "asks": [
      "What form of flow control is used with TCP?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "None",
      "Random",
      "Windowing",
      "Explicit buffering"
    ]
  },
  {
    "number": "19",
    "type": "6",
    "asks": [
      "In order to generate an RSA key for SSH on a switch, which of the following is required? (Choose two.)"
    ],
    "img": [],
    "sentence": [
      "Explanation: There are four steps required to enable SSH support on a Cisco IOS router:",
      "1)\tConfigure the hostname command.",
      "2)\tConfigure the DNS domain.",
      "3)\tGenerate the SSH key to be used.",
      "4)\tEnable SSH transport support for the virtual type terminal (vtys). In order to generate an RSA key, only point 1) and 2) are required"
    ],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "Configuring VTY access.",
      "Configuring a hostname.",
      "Creating a user with a password.",
      "Configuring the version of SSH.",
      "Assigning a DNS domain name."
    ]
  },
  {
    "number": "20",
    "type": "197",
    "asks": [
      "Which of the following is not a valid error typically seen in show interface output?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "Babble",
      "Late collision",
      "Ignored",
      "Trickle"
    ]
  },
  {
    "number": "21",
    "type": "151",
    "asks": [
      "Refer to the exhibit. Which type of route does R1 use to reach host 10.10.14.10/32?"
    ],
    "img": [
      "img0121"
    ],
    "sentence": [],
    "listing": [
      "r1#sh ip ro",
      "Gateway of last resort is 10.10.10.18 to network 0.0.0.0",
      "10.0.0.0/8 ie variably ¦ubnattad, 4 subnets, 3 masks",
      "C\t10.10.10.0/30 is directly connected, PastEthernetO/1",
      "O\t10.10.14.0/25 [110/6576] via 10.10.10.1, 06:58:21, FastEthernetO/1",
      "C\t10.10.10.16/30 is direotly oonnootod, FastEthornotO/24",
      "O\t10.10.14.144/28 [110/110] via 10.10.10.1, 06:58:21, FastEthernetO/1",
      "B* 0.0.0.0/0 [20/0] via 10.10.10 18, 01:17:58"
    ],
    "responses": [
      "B"
    ],
    "variants": [
      "default route",
      "network route",
      "host route",
      "floating static route"
    ]
  },
  {
    "number": "22",
    "type": "428",
    "asks": [
      "What feature does DAI rely on?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "ACLs",
      "DHCP snooping",
      "QoS DiffServ",
      "NBAR",
      "OSPF"
    ]
  },
  {
    "number": "23",
    "type": "4",
    "asks": [
      "Which of the following is true regarding spine-and-leaf architecture?"
    ],
    "img": [],
    "sentence": [
      "Explanation: With Leaf-Spine configurations, all devices are exactly the same number of segments away and contain a predictable and consistent amount of delay or latency for traveling information. This is possible because of the new topology design that has only two layers, the Leaf layer and Spine layer."
    ],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "Higher bandwidth can be obtained for each link between leaf switches.",
      "It facilitates STP troubleshooting because STP blocked ports can be predicted easily.",
      "By design, traveling information has variable latency between endpoint devices.",
      "Each device in the topology is separated by the same number of hops."
    ]
  },
  {
    "number": "24",
    "type": "212",
    "asks": [
      "Which statement about CDP is correct?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "CDP is disabled by default.",
      "CDP relies on TCP",
      "CDP is disabled on all serial interfaces by default.",
      "CDP is a Layer 2 protocol."
    ]
  },
  {
    "number": "25",
    "type": "198",
    "asks": [
      "What counter is incremented when the number of frames transmitted is greater than 1518 bytes in size?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "Babble",
      "Late collision",
      "Runt",
      "Ignored"
    ]
  },
  {
    "number": "26",
    "type": "87",
    "asks": [
      "Which mode allows to configure EtherChannel between two switches without using a negotiation protocol?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "on",
      "auto",
      "active",
      "desirable"
    ]
  },
  {
    "number": "27",
    "type": "81",
    "asks": [
      "Which IPv6 address block forwards packets to a multicast address rather than a unicast address?"
    ],
    "img": [],
    "sentence": [
      "Explanation: 2000::/3 Global Unicast fc00::/7 Unique Local Unicast fe80::/10 Link-Scoped Unicast ff00::/8 Multicast"
    ],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "2000::/3",
      "FC00::/7",
      "FE80::/10",
      "FF00::/8"
    ]
  },
  {
    "number": "28",
    "type": "430",
    "asks": [
      "Which of the following is not an HTTP method used with REST APIs?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "PUT",
      "POST",
      "SEND",
      "GET",
      "DELETE"
    ]
  },
  {
    "number": "29",
    "type": "27",
    "asks": [
      "What is a role of an SNMP agent?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "It responds to requests from the NMS, providing it with information about MIB variables.",
      "It handles user authentication between network devices and a RADIUS or TACACS+ server.",
      "It collects information about disastrous system events from remote network nodes.",
      "It supervises routing between Layer 3 devices in a network."
    ]
  },
  {
    "number": "30",
    "type": "69",
    "asks": [
      "Refer to the exhibit. Based on the LACP neighbor status, in which mode is the SW1 port channel configured?"
    ],
    "img": [],
    "sentence": [],
    "listing": [
      "SW1# show lacp neighbor",
      "Flags:\tS - Device is sending Slow LACPDUs",
      "F - Device is sending Fast LACPDUs",
      "A - Device is in Active mode",
      "P - Device is in Passive mode",
      "Channel group 31 neighbors",
      "Partner's inforiration:",
      "LaCP port\t\t\tAdnin Oper\t\tPort\tPort",
      "Port\tFlags\tPriority\tDev ID\tAge\tkey\tKey\tKusber\tState",
      "Etl/0\tSP\t32768\taabb.cc40.4000\t6s\t0x0\t0x23\t0x101\t0x3C",
      "Etl/1\tSP\t32768\taabb.cc50.4000\t6s\t0x0\t0x23\t0x101\t0x3C"
    ],
    "responses": [
      "C"
    ],
    "variants": [
      "auto",
      "active",
      "passive",
      "mode on"
    ]
  },
  {
    "number": "31",
    "type": "372",
    "asks": [
      "What attack method locks out a system or even encrypts it and then offers to unlock it in exchange\tfor\tmoney?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "Worm",
      "Man-in-the-middle",
      "Phishing",
      "Ransomware"
    ]
  },
  {
    "number": "32",
    "type": "81",
    "asks": [
      "Which IPv6 address block forwards packets to a multicast address rather than a unicast address?"
    ],
    "img": [],
    "sentence": [
      "Explanation: 2000::/3 Global Unicast fc00::/7 Unique Local Unicast fe80::/10 Link-Scoped Unicast ff00::/8 Multicast"
    ],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "2000::/3",
      "FC00::/7",
      "FE80::/10",
      "FF00::/8"
    ]
  },
  {
    "number": "33",
    "type": "430",
    "asks": [
      "Which of the following is not an HTTP method used with REST APIs?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "PUT",
      "POST",
      "SEND",
      "GET",
      "DELETE"
    ]
  },
  {
    "number": "34",
    "type": "117",
    "asks": [
      "What is the main difference between AAA authentication and authorization?"
    ],
    "img": [],
    "sentence": [
      "that the users initiate.",
      "authentication agent and the user database.",
      "passwords."
    ],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "Authentication identifies and verifies users who are attempting to access the system, while authorization controls the tasks that the users can perform.",
      "Authentication controls the system processes that users O are allowed to access, while authorization logs the activities",
      "Authentication verifies usernames and passwords, while O authorization handles the communication between the",
      "Authentication identifies users who are attempting to O access the system, while authorization validates the users"
    ]
  },
  {
    "number": "35",
    "type": "420",
    "asks": [
      "Which RF band is used with 802.11 ac?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "2.4 GHz",
      "5 GHz",
      "Both 2.4 GHz and 5 GHz",
      "7 GHz"
    ]
  },
  {
    "number": "36",
    "type": "521",
    "asks": [
      "Which type of cable should used to connect a computer to a switch for management of the switch?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "Straight-through cable",
      "Crossover cable",
      "Rolled cable",
      "Shielded cable"
    ]
  },
  {
    "number": "37",
    "type": "63",
    "asks": [
      "Networking and cloud technologies usually use which type of the following APIs?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "SOAP",
      "REST",
      "JSON-RPC",
      "XML-RPC"
    ]
  },
  {
    "number": "38",
    "type": "454",
    "asks": [
      "Which statement is true about collision domains?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "All devices in the collision domain can witness have a frame u collision.",
      "All devices in the collision domain can receive layer 2 broadcast messages.",
      "All devices in the collision domain can receive layer 3 broadcast messages.",
      "All devices in the collision domain are set to 100 Mbps full-duplex."
    ]
  },
  {
    "number": "39",
    "type": "378",
    "asks": [
      "What is an alternative to using local authentication on a Cisco router?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "Centralized AAA",
      "A remote Telnet database",
      "SNMP for authentication",
      "FTP for authentication"
    ]
  },
  {
    "number": "40",
    "type": "105",
    "asks": [
      "A Router has learned route 192.168.07.0/24 via IS-IS, RIP, OSPF, and Internal EIGRP. Which routing protocol is installed in the routing table?"
    ],
    "img": [],
    "sentence": [
      "Explanation: Internal EIGRP because it has the lowest administrative distance"
    ],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "IS-IS",
      "Internal EIGRP",
      "RIP",
      "OSPF"
    ]
  },
  {
    "number": "41",
    "type": "500",
    "asks": [
      "Which sub-protocol inside of the PPP suite is responsible for authentication?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "MPLS",
      "NCP",
      "LCP",
      "ACP"
    ]
  },
  {
    "number": "42",
    "type": "389",
    "asks": [
      "What does eq indicate in an ACL?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "You are matching a port or ports.",
      "You are using a standard ACL in place of an extended ACL.",
      "You are only using one ACE in the ACL."
    ]
  },
  {
    "number": "43",
    "type": "72",
    "asks": [
      "Which mechanism is used by Cisco DNA Center to collect data from the network?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "Devices send data periodically to the controller using the call-home protocol",
      "Devices exchange data with the controller after establishing an IPsec tunnel",
      "The Cisco CLI Analyzer tool collects data from all licensed network devices and streams it to the controller",
      "Network devices use a variety of services like syslog, SNMP, u and streaming telemetry to send data to the controller"
    ]
  },
  {
    "number": "44",
    "type": "209",
    "asks": [
      "What command disables CDP globally on a device?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "no cdp run",
      "no cdp enable",
      "cdp disable",
      "cdp stop"
    ]
  },
  {
    "number": "45",
    "type": "278",
    "asks": [
      "What command can be used to view the VLANs and interface assignments on a switch?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "show vlan brief",
      "show vlan status",
      "show vlan summary",
      "show vlan database"
    ]
  },
  {
    "number": "46",
    "type": "319",
    "asks": [
      "What is the size of the source address field in an IPv6 header?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "6 bytes",
      "8 bytes",
      "12 bytes",
      "16 bytes"
    ]
  },
  {
    "number": "47",
    "type": "319",
    "asks": [
      "What is the unreachable AD?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "0",
      "100",
      "200",
      "255"
    ]
  },
  {
    "number": "48",
    "type": "271",
    "asks": [
      "What is the name of the database that stores address information in a Cisco switch?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "MAC address table",
      "Routing table",
      "Interface table",
      "Buffer table"
    ]
  },
  {
    "number": "49",
    "type": "257",
    "asks": [
      "VMware Workstation is an example of what type of hypervisor technology?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "Type 2",
      "Type 1",
      "Bare metal",
      "Container"
    ]
  },
  {
    "number": "50",
    "type": "442",
    "asks": [
      "What command allows to see locally used OSPF routes?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "show ip ospf database local",
      "show ospf all",
      "show ip route ospf",
      "show ospf routes local"
    ]
  },
  {
    "number": "51",
    "type": "343",
    "asks": [
      "What is the inside global address for translation?"
    ],
    "img": [],
    "sentence": [
      "Examine the following command: ip nat inside source list 1 interface faO/O overload"
    ],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "The IP address on interface faO/O",
      "The virtual address on interface faO/O",
      "The address in access list 1",
      "The address in the NAT pool named interface"
    ]
  },
  {
    "number": "52",
    "type": "467",
    "asks": [
      "Which of the following statements does not represent the logical management of a firewall?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "All physical access to the firewall should be tightly u controlled.",
      "All firewall policies should be documented.",
      "Firewall logs should be regularly monitored.",
      "Firewalls should allow traffic by default and deny traffic explicitly."
    ]
  },
  {
    "number": "53",
    "type": "496",
    "asks": [
      "In Cisco's three-tier architecture, the links between the distribution layer switches indicate what kind of topology?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "Full mesh topology",
      "Partial mesh topology",
      "Star topology",
      "Ring topology"
    ]
  },
  {
    "number": "54",
    "type": "186",
    "asks": [
      "When configuring a floating static route, what must be done in order to ensure that the backup route is used in case the primary route fails?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "The floating static route must have a higher administrative u distance than the primary route so it is used as a backup",
      "The floating static route must have a lower administrative distance than the primary route so it is used as a backup",
      "The administrative distance must be higher on the primary route so that the backup route becomes secondary.",
      "The default-information originate command must be configured for the route to be installed into the routing table"
    ]
  },
  {
    "number": "55",
    "type": "230",
    "asks": [
      "What does it mean when the destination address in an Ethernet frame is set FFFF.FFFF.FFFF?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "The frame is a multicast frame.",
      "The frame is a unicast frame.",
      "The frame should be dropped.",
      "The frame is a broadcast frame."
    ]
  },
  {
    "number": "56",
    "type": "295",
    "asks": [
      "What command outputs the current Spanning Tree Protocol parameters on a Cisco switch?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "show 802dot1d",
      "show topology spanning-tree",
      "show redundancy",
      "show spanning-tree"
    ]
  },
  {
    "number": "57",
    "type": "16",
    "asks": [
      "A company charges its network technician to backup its 30 network router configurations globally. Using the Cisco IOS MIB, what is the protocol that allows the technician to do the job?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "SNMP",
      "SMTP",
      "CDP",
      "ARP",
      "STP"
    ]
  },
  {
    "number": "58",
    "type": "482",
    "asks": [
      "Which is a direct benefit of a full mesh topology?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "Increased bandwidth",
      "Increased redundancy",
      "Decreased switch count",
      "Increased complexity"
    ]
  },
  {
    "number": "59",
    "type": "318",
    "asks": [
      "What is the administrative distance of Internal EIGRP routes?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "5",
      "20",
      "90",
      "100"
    ]
  },
  {
    "number": "60",
    "type": "112",
    "asks": [
      "For which two reasons does a network administrator configure a floating static route? (Choose two.)"
    ],
    "img": [],
    "sentence": [
      "Explanation: Floating Static Routes Floating static routes are static routes",
      "that have an administrative distance greater than the administrative distance of another static route or dynamic routes. They are very useful when providing a backup to a primary link.",
      "Refer to the exhibit. A network administrator needs to add a subnet for a new floor that will add 20 users to the network."
    ],
    "listing": [],
    "responses": [
      "B",
      "C"
    ],
    "variants": [
      "to route traffic differently based on the source IP of the packet",
      "to enable fallback static routing when the dynamic routing protocol fails",
      "to automatically route traffic on a secondary path when the primary path goes down",
      "to support load balancing via static routing",
      "to control the return path of traffic that is sent from the router"
    ]
  },
  {
    "number": "61",
    "type": "124",
    "asks": [
      "Which IPv4 network and subnet mask combination does he need to assign in order to minimize wasting addresses?"
    ],
    "img": [
      "img0161"
    ],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "10.20.225.48\t255.255.255.240",
      "10.20.225.48\t255.255.255.224",
      "10.20.225.32\t255.255.255.240",
      "10.20.225.32 255.255.255.224"
    ]
  },
  {
    "number": "62",
    "type": "265",
    "asks": [
      "What happens to a frame with destination MAC address ffff.ffff.ffff?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "The frame is dropped.",
      "The frame is forwarded out the giO/O port only.",
      "The frame is buffered.",
      "The frame is flooded out all ports except for the port on which the frame entered the switch."
    ]
  },
  {
    "number": "63",
    "type": "174",
    "asks": [
      "Which physical appliance can a Cisco Firepower device replace, in addition to a legacy firewall?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "Router",
      "L2 switch",
      "IPS",
      "Content caching system"
    ]
  },
  {
    "number": "64",
    "type": "247",
    "asks": [
      "How many more bits are used in an IPv6 address than in an IPv4 address?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "96",
      "128",
      "48",
      "64"
    ]
  },
  {
    "number": "65",
    "type": "90",
    "asks": [
      "Two switches are connected and using Cisco Dynamic Trunking Protocol CDTP. Switchl is set to Dynamic Desirable and Switch2 is set to Dynamic Auto. What is the effect of this configuration?"
    ],
    "img": [],
    "sentence": [
      "Explanation: Dynamic Auto Makes the Ethernet port willing to convert the link to a trunk link. The port becomes a trunk port if the neighboring port is set to trunk or dynamic desirable mode. This is the default mode for some switchports."
    ],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "The link is in an error disabled state.",
      "The link becomes an access port.",
      "The link is in a down state.",
      "The link becomes a trunk port."
    ]
  }
]