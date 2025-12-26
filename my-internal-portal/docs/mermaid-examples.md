---
sidebar_position: 2
---

# Ví dụ sử dụng Mermaid

Docusaurus hỗ trợ vẽ sơ đồ bằng Mermaid. Bạn có thể sử dụng các loại sơ đồ sau:

## Sơ đồ Flowchart (Lưu đồ)

```mermaid
graph TD
    A[Start] --> B{Điều kiện?}
    B -->|Có| C[Thực hiện A]
    B -->|Không| D[Thực hiện B]
    C --> E[Kết thúc]
    D --> E
```

## Sơ đồ Sequence (Trình tự)

```mermaid
sequenceDiagram
    participant Client
    participant Server
    participant Database
    
    Client->>Server: Gửi request
    Server->>Database: Query data
    Database-->>Server: Trả về data
    Server-->>Client: Response
```

## Sơ đồ kiến trúc hệ thống

```mermaid
graph TB
    subgraph "Frontend"
        A[React App]
        B[Next.js]
    end
    
    subgraph "Backend"
        C[API Gateway]
        D[Auth Service]
        E[User Service]
    end
    
    subgraph "Database"
        F[(PostgreSQL)]
        G[(Redis)]
    end
    
    A --> C
    B --> C
    C --> D
    C --> E
    D --> F
    E --> F
    E --> G
```

## Sơ đồ Network/Infrastructure

```mermaid
graph LR
    subgraph "DMZ"
        LB[Load Balancer]
    end
    
    subgraph "Web Tier"
        W1[Web Server 1]
        W2[Web Server 2]
    end
    
    subgraph "App Tier"
        A1[App Server 1]
        A2[App Server 2]
    end
    
    subgraph "Data Tier"
        DB[(Database)]
        CACHE[(Cache)]
    end
    
    LB --> W1
    LB --> W2
    W1 --> A1
    W2 --> A2
    A1 --> DB
    A2 --> DB
    A1 --> CACHE
    A2 --> CACHE
```

## Sơ đồ Gantt (Tiến độ dự án)

```mermaid
gantt
    title Kế hoạch phát triển
    dateFormat  YYYY-MM-DD
    section Phase 1
    Thiết kế UI          :a1, 2024-01-01, 30d
    section Phase 2
    Phát triển Backend   :a2, 2024-01-15, 45d
    section Phase 3
    Testing              :a3, 2024-02-01, 20d
    Deploy               :a4, 2024-02-21, 10d
```

## Sơ đồ Class Diagram

```mermaid
classDiagram
    class User {
        +String name
        +String email
        +login()
        +logout()
    }
    
    class Post {
        +String title
        +String content
        +create()
        +update()
    }
    
    class Comment {
        +String text
        +create()
    }
    
    User "1" --> "*" Post
    User "1" --> "*" Comment
    Post "1" --> "*" Comment
```

## Sơ đồ State Diagram

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> Review
    Review --> Approved
    Review --> Rejected
    Approved --> Published
    Rejected --> Draft
    Published --> [*]
```

## Lưu ý

- Tất cả các sơ đồ Mermaid sẽ tự động render khi bạn build hoặc chạy dev server
- Bạn có thể sử dụng bất kỳ loại sơ đồ nào mà Mermaid hỗ trợ
- Tham khảo thêm tại: https://mermaid.js.org/

