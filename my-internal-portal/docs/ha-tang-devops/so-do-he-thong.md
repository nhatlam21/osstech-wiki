---
id: so-do-he-thong
title: Sơ đồ hệ thống
sidebar_label: Sơ đồ hệ thống
sidebar_position: 2
---

import Author from '@site/src/components/Author';
import Feedback from '@site/src/components/Feedback';

<Author 
  name="DevOps Team"
  email="devops@osstech.com"
  role="DevOps"
  lastUpdated="2024-12-25"
/>

# Sơ đồ hệ thống

:::info Tổng quan
Sơ đồ kiến trúc hệ thống của Osstech, bao gồm các server, network, và luồng dữ liệu.
:::

## Sơ đồ kiến trúc tổng thể

```mermaid
graph TB
    subgraph "Internet"
        USER[Users]
    end
    
    subgraph "DMZ"
        LB[Load Balancer<br/>192.168.1.5]
    end
    
    subgraph "Web Tier"
        W1[Web Server 1<br/>192.168.1.10]
        W2[Web Server 2<br/>192.168.1.11]
    end
    
    subgraph "App Tier"
        A1[App Server 1<br/>192.168.1.15]
        A2[App Server 2<br/>192.168.1.16]
    end
    
    subgraph "Data Tier"
        DB[(PostgreSQL<br/>192.168.1.20)]
        CACHE[(Redis<br/>192.168.1.30)]
    end
    
    USER --> LB
    LB --> W1
    LB --> W2
    W1 --> A1
    W2 --> A2
    A1 --> DB
    A2 --> DB
    A1 --> CACHE
    A2 --> CACHE
```

## Luồng dữ liệu

```mermaid
sequenceDiagram
    participant User
    participant LB as Load Balancer
    participant Web as Web Server
    participant App as App Server
    participant DB as Database
    participant Cache as Redis
    
    User->>LB: HTTP Request
    LB->>Web: Forward Request
    Web->>App: API Call
    App->>Cache: Check Cache
    alt Cache Hit
        Cache-->>App: Return Cached Data
    else Cache Miss
        App->>DB: Query Data
        DB-->>App: Return Data
        App->>Cache: Store in Cache
    end
    App-->>Web: Response
    Web-->>LB: Response
    LB-->>User: HTTP Response
```

## Network Topology

```mermaid
graph LR
    subgraph "External Network"
        INTERNET[Internet]
    end
    
    subgraph "DMZ Network<br/>192.168.1.0/24"
        LB[Load Balancer]
        FW1[Firewall 1]
    end
    
    subgraph "Internal Network<br/>192.168.2.0/24"
        W1[Web 1]
        W2[Web 2]
        A1[App 1]
        A2[App 2]
    end
    
    subgraph "Database Network<br/>192.168.3.0/24"
        DB[(Database)]
        CACHE[(Cache)]
    end
    
    INTERNET --> FW1
    FW1 --> LB
    LB --> W1
    LB --> W2
    W1 --> A1
    W2 --> A2
    A1 --> DB
    A2 --> DB
    A1 --> CACHE
    A2 --> CACHE
```

## Ports và Services

| Server | Service | Port | Protocol |
|--------|---------|------|----------|
| Load Balancer | HTTP | 80 | TCP |
| Load Balancer | HTTPS | 443 | TCP |
| Web Server | Nginx | 80, 443 | TCP |
| App Server | Node.js | 3000 | TCP |
| Database | PostgreSQL | 5432 | TCP |
| Cache | Redis | 6379 | TCP |

---

<Feedback />

