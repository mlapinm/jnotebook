HttpServer server = HttpServer.create();
server.bind(new InetSocketAddress(8765), 0);
server.createContext("/", new SomeHandler());
server.start();