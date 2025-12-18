export interface Flashcard {
  id: string;
  category: string;
  front: string;
  back: string;
  tags: string[];
  relatedServices?: string[];
}

export const flashcards: Flashcard[] = [
  // Analytics Services
  {
    id: "fc-analytics-athena",
    category: "Analytics",
    front: "Amazon Athena - Use Case & Key Features",
    back: "Ad-hoc SQL queries on S3 data\n• Serverless - no infrastructure\n• Pay $5 per TB scanned\n• Integrates with AWS Glue Data Catalog\n• Supports CSV, JSON, Parquet, ORC formats",
    tags: ["analytics", "serverless", "s3", "sql"],
    relatedServices: ["S3", "Glue", "EMR", "Redshift"]
  },
  {
    id: "fc-analytics-glue",
    category: "Analytics",
    front: "AWS Glue - Primary Functions",
    back: "Serverless ETL (Extract, Transform, Load) service\n• Crawlers: Auto-discover schema\n• Data Catalog: Centralized metadata repository\n• ETL Jobs: Transform and prepare data\n• Used by Athena, EMR, Redshift",
    tags: ["analytics", "etl", "serverless"],
    relatedServices: ["Athena", "EMR", "Redshift"]
  },
  {
    id: "fc-analytics-kinesis-streams",
    category: "Analytics",
    front: "Kinesis Data Streams - Limits & Use Case",
    back: "Real-time data streaming\n• Write: 1 MB/sec per shard\n• Read: 2 MB/sec per shard\n• Retention: 1-365 days\n• Use: Real-time analytics, log processing",
    tags: ["analytics", "streaming", "real-time"],
    relatedServices: ["Kinesis Firehose", "Kinesis Analytics"]
  },
  {
    id: "fc-analytics-kinesis-firehose",
    category: "Analytics",
    front: "Kinesis Data Firehose - Delivery Targets",
    back: "Fully managed delivery service\n• Auto-scales (no shards to manage)\n• Delivers to: S3, Redshift, OpenSearch, Splunk\n• Near real-time (60s latency minimum)\n• Can transform data with Lambda",
    tags: ["analytics", "streaming", "delivery"],
    relatedServices: ["Kinesis Streams", "S3", "Redshift"]
  },
  {
    id: "fc-analytics-redshift",
    category: "Analytics",
    front: "Amazon Redshift - Architecture & Features",
    back: "Columnar data warehouse\n• Petabyte-scale analytics\n• Redshift Spectrum: Query S3 directly\n• Serverless option available\n• Up to 72% savings with Reserved Instances",
    tags: ["analytics", "data-warehouse", "columnar"],
    relatedServices: ["S3", "Glue", "QuickSight"]
  },
  {
    id: "fc-analytics-emr",
    category: "Analytics",
    front: "Amazon EMR - When to Use",
    back: "Elastic MapReduce - Hadoop/Spark clusters\n• Big data processing frameworks\n• Use for: Hadoop, Spark, Hive, Presto\n• EMR Serverless: No cluster management\n• Cost: Pay per second for instances",
    tags: ["analytics", "big-data", "hadoop", "spark"],
    relatedServices: ["S3", "Glue", "Athena"]
  },
  {
    id: "fc-analytics-quicksight",
    category: "Analytics",
    front: "Amazon QuickSight - Key Features",
    back: "Serverless BI & visualization\n• SPICE: In-memory calculation engine\n• Connects to: RDS, Redshift, Athena, S3\n• ML-powered insights\n• Pay-per-session pricing",
    tags: ["analytics", "bi", "visualization"],
    relatedServices: ["Athena", "Redshift", "RDS"]
  },
  {
    id: "fc-analytics-lake-formation",
    category: "Analytics",
    front: "AWS Lake Formation - Purpose",
    back: "Data lake creation & governance\n• Centralized permissions with LF-Tags\n• Simplifies data ingestion\n• Fine-grained access control\n• Integrates with Glue Data Catalog",
    tags: ["analytics", "data-lake", "security"],
    relatedServices: ["Glue", "S3", "Athena"]
  },
  {
    id: "fc-analytics-decision",
    category: "Analytics",
    front: "Analytics Service Decision Tree",
    back: "• Ad-hoc SQL on S3 → Athena\n• Schema discovery/ETL → Glue\n• Real-time streaming → Kinesis\n• Big data (Hadoop/Spark) → EMR\n• BI dashboards → QuickSight\n• Data lake governance → Lake Formation\n• Data warehousing → Redshift",
    tags: ["analytics", "decision-tree", "comparison"],
    relatedServices: ["all-analytics"]
  },

  // Migration Services
  {
    id: "fc-migration-dms",
    category: "Migration",
    front: "AWS DMS - Migration Types",
    back: "Database Migration Service\n• Homogeneous: Same engine (Oracle→Oracle)\n• Heterogeneous: Different engines (Oracle→Aurora)\n• Schema Conversion Tool (SCT) for heterogeneous\n• Continuous replication available",
    tags: ["migration", "database"],
    relatedServices: ["RDS", "Aurora", "SCT"]
  },
  {
    id: "fc-migration-7rs",
    category: "Migration",
    front: "7 Rs of Migration Strategy",
    back: "1. Retire: Decommission\n2. Retain: Keep on-premises\n3. Relocate: VMware Cloud\n4. Rehost: Lift-and-shift\n5. Repurchase: Move to SaaS\n6. Replatform: Lift-tinker-shift\n7. Refactor: Re-architect",
    tags: ["migration", "strategy"],
    relatedServices: ["MGN", "DMS"]
  },
  {
    id: "fc-migration-datasync",
    category: "Migration",
    front: "AWS DataSync - Use Case",
    back: "Automated data transfer service\n• 10x faster than open-source tools\n• Agent-based (runs on-premises)\n• One-time or scheduled transfers\n• To/from: NFS, SMB, S3, EFS, FSx",
    tags: ["migration", "transfer", "hybrid"],
    relatedServices: ["S3", "EFS", "FSx"]
  },
  {
    id: "fc-migration-storage-gateway",
    category: "Migration",
    front: "AWS Storage Gateway - Types",
    back: "Hybrid cloud storage\n• File Gateway: NFS/SMB to S3\n• Volume Gateway: iSCSI to S3 (cached/stored)\n• Tape Gateway: Virtual tape library to S3/Glacier\n• Local caching for low latency",
    tags: ["migration", "hybrid", "storage"],
    relatedServices: ["S3", "Glacier", "EBS"]
  },
  {
    id: "fc-migration-transfer-family",
    category: "Migration",
    front: "AWS Transfer Family - Protocols",
    back: "Managed file transfer to S3/EFS\n• Supports: SFTP, FTPS, FTP, AS2\n• Use: Migrate existing workflows\n• Integrates with existing authentication\n• Pay per protocol + data transfer",
    tags: ["migration", "transfer", "protocol"],
    relatedServices: ["S3", "EFS"]
  },
  {
    id: "fc-migration-snow-family",
    category: "Migration",
    front: "Snow Family Selection Guide",
    back: "• Snowcone (8-14 TB): IoT, edge, small transfers\n• Snowball Edge Storage (80 TB): Large migrations\n• Snowball Edge Compute (42 TB): Edge + transfer\n• Snowmobile (100 PB): Datacenter-scale\nUse when: Limited bandwidth or offline transfers needed",
    tags: ["migration", "transfer", "physical"],
    relatedServices: ["S3"]
  },
  {
    id: "fc-migration-mgn",
    category: "Migration",
    front: "AWS Application Migration Service (MGN)",
    back: "Automated lift-and-shift (rehost)\n• Formerly CloudEndure\n• Continuous replication\n• Minimal downtime\n• Supports physical, virtual, cloud servers",
    tags: ["migration", "rehost", "lift-and-shift"],
    relatedServices: ["EC2", "DMS"]
  },
  {
    id: "fc-migration-comparison",
    category: "Migration",
    front: "Data Transfer Service Comparison",
    back: "DataSync: One-time/scheduled, agent-based, 10x faster\nStorage Gateway: Ongoing hybrid, local caching\nTransfer Family: SFTP/FTP to S3, protocol compatibility\nSnow Family: Offline/bandwidth-limited, physical devices\nDirect Connect: Dedicated network connection",
    tags: ["migration", "comparison", "transfer"],
    relatedServices: ["all-migration"]
  },

  // Database Services
  {
    id: "fc-database-multi-az",
    category: "Database",
    front: "RDS Multi-AZ - Purpose & Features",
    back: "High availability (NOT read scaling)\n• Synchronous replication\n• Standby does NOT serve reads\n• Automatic failover\n• Same region only\n• No performance benefit",
    tags: ["database", "rds", "ha", "availability"],
    relatedServices: ["RDS", "Aurora"]
  },
  {
    id: "fc-database-read-replicas",
    category: "Database",
    front: "RDS Read Replicas - Purpose & Features",
    back: "Read scalability (NOT HA)\n• Asynchronous replication\n• Serves read traffic\n• Manual promotion to primary\n• Cross-region supported\n• Up to 5 read replicas (15 for Aurora)",
    tags: ["database", "rds", "scalability"],
    relatedServices: ["RDS", "Aurora"]
  },
  {
    id: "fc-database-aurora",
    category: "Database",
    front: "Amazon Aurora - Architecture",
    back: "MySQL/PostgreSQL compatible\n• 6 copies across 3 AZs\n• Up to 15 read replicas\n• 5x faster than MySQL, 3x than PostgreSQL\n• Auto-scaling storage (10GB to 128TB)\n• Aurora Serverless for variable workloads",
    tags: ["database", "aurora", "mysql", "postgresql"],
    relatedServices: ["RDS"]
  },
  {
    id: "fc-database-dynamodb",
    category: "Database",
    front: "DynamoDB - Key Features",
    back: "Fully managed NoSQL\n• Single-digit millisecond latency\n• Partition key design is critical\n• Auto-scaling capacity\n• DynamoDB Streams: Change capture\n• Global Tables: Multi-region replication",
    tags: ["database", "nosql", "dynamodb"],
    relatedServices: ["DAX", "Streams"]
  },
  {
    id: "fc-database-elasticache",
    category: "Database",
    front: "ElastiCache: Redis vs Memcached",
    back: "Redis:\n• Persistence/backup ✓\n• Replication/HA ✓\n• Complex data types ✓\n• Single-threaded\n\nMemcached:\n• Persistence ✗\n• Replication ✗\n• Simple key-value\n• Multi-threaded",
    tags: ["database", "cache", "redis", "memcached"],
    relatedServices: ["RDS", "DynamoDB"]
  },
  {
    id: "fc-database-documentdb",
    category: "Database",
    front: "Amazon DocumentDB",
    back: "MongoDB-compatible document database\n• Fully managed\n• Scales to workloads with millions of requests/sec\n• Integrated with AWS services\n• Use: Migrate MongoDB workloads",
    tags: ["database", "nosql", "mongodb"],
    relatedServices: ["DynamoDB"]
  },
  {
    id: "fc-database-neptune",
    category: "Database",
    front: "Amazon Neptune",
    back: "Graph database service\n• Supports: Gremlin, SPARQL\n• Use: Social networks, fraud detection, recommendation engines\n• Highly available with read replicas",
    tags: ["database", "graph", "nosql"],
    relatedServices: []
  },
  {
    id: "fc-database-qldb",
    category: "Database",
    front: "Amazon QLDB",
    back: "Quantum Ledger Database\n• Immutable, cryptographically verifiable\n• Use: Audit trails, system of record\n• Centralized (NOT decentralized blockchain)\n• SQL-like query language",
    tags: ["database", "ledger", "immutable"],
    relatedServices: ["Managed Blockchain"]
  },
  {
    id: "fc-database-timestream",
    category: "Database",
    front: "Amazon Timestream",
    back: "Time-series database\n• IoT, DevOps, analytics\n• Automatically scales\n• Tiered storage (memory + magnetic)\n• Built-in time-series analytics",
    tags: ["database", "time-series", "iot"],
    relatedServices: ["IoT Core"]
  },
  {
    id: "fc-database-memorydb",
    category: "Database",
    front: "Amazon MemoryDB for Redis",
    back: "Redis-compatible, durable in-memory database\n• Microsecond read, single-digit ms write latency\n• Multi-AZ durability\n• Unlike ElastiCache: Primary database (not cache)\n• Redis 6.2+ compatible",
    tags: ["database", "redis", "in-memory"],
    relatedServices: ["ElastiCache"]
  },
  {
    id: "fc-database-decision",
    category: "Database",
    front: "Database Selection Guide",
    back: "• Traditional SQL → RDS\n• High-performance SQL → Aurora\n• NoSQL key-value → DynamoDB\n• Caching → ElastiCache\n• MongoDB → DocumentDB\n• Graph → Neptune\n• Immutable ledger → QLDB\n• Time-series → Timestream",
    tags: ["database", "decision-tree"],
    relatedServices: ["all-database"]
  },

  // Integration Services
  {
    id: "fc-integration-sqs",
    category: "Integration",
    front: "Amazon SQS - Key Features",
    back: "Message queue (pull-based)\n• Standard: Unlimited throughput, at-least-once\n• FIFO: 300 msg/sec (3000 with batching), exactly-once\n• Message retention: 4 days default, up to 14 days\n• Use: Decouple application components",
    tags: ["integration", "queue", "messaging"],
    relatedServices: ["SNS", "Lambda"]
  },
  {
    id: "fc-integration-sns",
    category: "Integration",
    front: "Amazon SNS - Model & Use Cases",
    back: "Pub/Sub messaging (push-based)\n• Topic: Publish once, deliver to many\n• Subscribers: SQS, Lambda, HTTP, email, SMS\n• Fan-out pattern with SQS\n• No message persistence",
    tags: ["integration", "pubsub", "messaging"],
    relatedServices: ["SQS", "Lambda"]
  },
  {
    id: "fc-integration-eventbridge",
    category: "Integration",
    front: "Amazon EventBridge - Capabilities",
    back: "Event bus for event-driven architecture\n• Route events based on content (rules)\n• 100+ SaaS integrations\n• Schema registry\n• Use: Cross-account events, SaaS integration",
    tags: ["integration", "events", "serverless"],
    relatedServices: ["Lambda", "Step Functions"]
  },
  {
    id: "fc-integration-comparison",
    category: "Integration",
    front: "SQS vs SNS vs EventBridge",
    back: "SQS: Pull-based, persistent, decouple/buffer\nSNS: Push-based, no persistence, fan-out\nEventBridge: Event-driven, content-based routing, SaaS\n\nCommon pattern: SNS → multiple SQS queues",
    tags: ["integration", "comparison"],
    relatedServices: ["SQS", "SNS", "EventBridge"]
  },
  {
    id: "fc-integration-step-functions",
    category: "Integration",
    front: "AWS Step Functions - Workflow Types",
    back: "Visual workflow orchestration\n• Standard: Long-running (up to 1 year), exactly-once\n• Express: High-volume, short (<5 min), at-least-once\n• Use: Orchestrate Lambda, ECS, Batch, etc.",
    tags: ["integration", "orchestration", "serverless"],
    relatedServices: ["Lambda", "ECS"]
  },
  {
    id: "fc-integration-api-gateway",
    category: "Integration",
    front: "Amazon API Gateway - API Types",
    back: "Managed API service\n• REST API: Full features, API keys, caching\n• HTTP API: Lower cost, basic features\n• WebSocket API: Two-way communication\n• Integrates with Lambda, HTTP endpoints, AWS services",
    tags: ["integration", "api", "serverless"],
    relatedServices: ["Lambda", "Cognito"]
  },
  {
    id: "fc-integration-mq",
    category: "Integration",
    front: "Amazon MQ - When to Use",
    back: "Managed message broker\n• Use ONLY for: Migrating existing ActiveMQ/RabbitMQ\n• If building new: Use SQS/SNS instead\n• Supports: AMQP, MQTT, STOMP, OpenWire",
    tags: ["integration", "messaging", "migration"],
    relatedServices: ["SQS", "SNS"]
  },

  // Compute Services
  {
    id: "fc-compute-ec2-types",
    category: "Compute",
    front: "EC2 Instance Types - Use Cases",
    back: "• General Purpose (T, M): Balanced\n• Compute Optimized (C): CPU-intensive\n• Memory Optimized (R, X): In-memory databases\n• Storage Optimized (I, D): High IOPS\n• Accelerated Computing (P, G): GPU, ML",
    tags: ["compute", "ec2"],
    relatedServices: ["Auto Scaling", "ELB"]
  },
  {
    id: "fc-compute-lambda",
    category: "Compute",
    front: "AWS Lambda - Limits & Pricing",
    back: "Serverless compute\n• Max execution: 15 minutes\n• Max memory: 10 GB\n• Pricing: Requests + duration (GB-seconds)\n• 1M free requests/month\n• Event-driven execution",
    tags: ["compute", "serverless", "lambda"],
    relatedServices: ["API Gateway", "Step Functions"]
  },
  {
    id: "fc-compute-ecs-vs-eks",
    category: "Compute",
    front: "ECS vs EKS",
    back: "ECS (Elastic Container Service):\n• AWS-native, simpler\n• Fargate: Serverless containers\n\nEKS (Elastic Kubernetes Service):\n• Standard Kubernetes\n• Multi-cloud, portable\n• More complex",
    tags: ["compute", "containers", "kubernetes"],
    relatedServices: ["Fargate", "ECR"]
  },
  {
    id: "fc-compute-elastic-beanstalk",
    category: "Compute",
    front: "AWS Elastic Beanstalk",
    back: "Platform as a Service (PaaS)\n• Deploy code, Beanstalk manages infrastructure\n• Supports: Java, .NET, Node, Python, Ruby, Go, Docker\n• Free (pay only for resources)\n• Full control still available",
    tags: ["compute", "paas", "managed"],
    relatedServices: ["EC2", "RDS"]
  },

  // Storage Services
  {
    id: "fc-storage-s3-classes",
    category: "Storage",
    front: "S3 Storage Classes - Transition Order",
    back: "Standard → Standard-IA → One Zone-IA → Intelligent-Tiering → Glacier Instant → Glacier Flexible → Glacier Deep Archive\n\n• IA: Infrequent Access (30-day minimum)\n• Glacier: Archival (90-180 day minimum)",
    tags: ["storage", "s3"],
    relatedServices: ["S3"]
  },
  {
    id: "fc-storage-s3-intelligent",
    category: "Storage",
    front: "S3 Intelligent-Tiering",
    back: "Automatic cost optimization\n• Monitors access patterns\n• Moves objects between tiers automatically\n• No retrieval fees\n• Small monthly monitoring fee\n• Use: Unknown or changing access patterns",
    tags: ["storage", "s3", "cost-optimization"],
    relatedServices: ["S3"]
  },
  {
    id: "fc-storage-ebs-types",
    category: "Storage",
    front: "EBS Volume Types",
    back: "• gp3/gp2 (SSD): General purpose, boot volumes\n• io2/io1 (SSD): High IOPS, databases\n• st1 (HDD): Throughput-optimized, big data\n• sc1 (HDD): Cold storage, infrequent access\n\nSSD: IOPS | HDD: Throughput",
    tags: ["storage", "ebs", "volumes"],
    relatedServices: ["EC2"]
  },
  {
    id: "fc-storage-efs",
    category: "Storage",
    front: "Amazon EFS - Key Features",
    back: "Elastic File System (NFS)\n• Multi-AZ, shared file system\n• Scales automatically\n• Use: Shared content, web serving\n• Linux only (NFSv4)\n• Pay for storage used",
    tags: ["storage", "efs", "shared"],
    relatedServices: ["EC2", "Lambda"]
  },
  {
    id: "fc-storage-fsx",
    category: "Storage",
    front: "Amazon FSx - Options",
    back: "• FSx for Windows: SMB, Active Directory\n• FSx for Lustre: HPC, ML workloads, sub-ms latency\n• FSx for NetApp ONTAP: Multi-protocol (NFS, SMB)\n• FSx for OpenZFS: ZFS file system",
    tags: ["storage", "fsx"],
    relatedServices: ["S3", "EFS"]
  },

  // Networking
  {
    id: "fc-network-vpc-basics",
    category: "Networking",
    front: "VPC Core Components",
    back: "• Subnets: Public (IGW route) vs Private\n• Route Tables: Direct traffic\n• Internet Gateway: Internet access\n• NAT Gateway: Outbound for private subnets\n• VPC Peering: Connect VPCs",
    tags: ["networking", "vpc"],
    relatedServices: ["EC2", "RDS"]
  },
  {
    id: "fc-network-nacl-vs-sg",
    category: "Networking",
    front: "NACLs vs Security Groups",
    back: "NACL (Network ACL):\n• Subnet level\n• Stateless (return traffic needs rule)\n• Allow + Deny rules\n• Processed in order\n\nSecurity Group:\n• Instance level\n• Stateful (auto allows return)\n• Allow rules only\n• All rules evaluated",
    tags: ["networking", "security", "vpc"],
    relatedServices: ["VPC", "EC2"]
  },
  {
    id: "fc-network-direct-connect",
    category: "Networking",
    front: "AWS Direct Connect",
    back: "Dedicated network connection to AWS\n• Reduce costs vs internet transfer\n• Consistent network performance\n• Private connectivity (not internet)\n• Use: Hybrid cloud, large data transfers",
    tags: ["networking", "hybrid", "connectivity"],
    relatedServices: ["VPN", "Transit Gateway"]
  },
  {
    id: "fc-network-elb-types",
    category: "Networking",
    front: "Load Balancer Types",
    back: "• ALB (Application): HTTP/HTTPS, Layer 7, path-based routing\n• NLB (Network): TCP/UDP, Layer 4, extreme performance\n• GLB (Gateway): Layer 3, third-party appliances\n• CLB (Classic): Legacy, avoid",
    tags: ["networking", "load-balancer"],
    relatedServices: ["EC2", "Auto Scaling"]
  },
  {
    id: "fc-network-route53",
    category: "Networking",
    front: "Route 53 Routing Policies",
    back: "• Simple: Single resource\n• Weighted: Traffic distribution %\n• Latency: Lowest latency\n• Failover: Active-passive\n• Geolocation: User location\n• Geoproximity: Geographic + bias",
    tags: ["networking", "dns", "routing"],
    relatedServices: ["CloudFront", "ELB"]
  },

  // Security & Compliance
  {
    id: "fc-security-iam",
    category: "Security",
    front: "IAM Best Practices",
    back: "• Least privilege principle\n• Use roles (not access keys) for EC2\n• Enable MFA for root + users\n• Rotate credentials regularly\n• Use policy conditions for extra security\n• Never share credentials",
    tags: ["security", "iam", "access"],
    relatedServices: ["Organizations", "STS"]
  },
  {
    id: "fc-security-kms",
    category: "Security",
    front: "AWS KMS - Key Types",
    back: "Key Management Service\n• Customer Managed Keys: Full control\n• AWS Managed Keys: AWS creates/manages\n• Integrates with most AWS services\n• Automatic key rotation available\n• Audit with CloudTrail",
    tags: ["security", "encryption", "kms"],
    relatedServices: ["S3", "EBS", "RDS"]
  },
  {
    id: "fc-security-waf-shield",
    category: "Security",
    front: "WAF vs Shield vs Firewall Manager",
    back: "WAF: Layer 7 web application firewall (SQL injection, XSS)\nShield Standard: Free DDoS protection\nShield Advanced: Enhanced DDoS ($3000/month)\nFirewall Manager: Centrally manage security rules",
    tags: ["security", "ddos", "firewall"],
    relatedServices: ["CloudFront", "ALB"]
  },
  {
    id: "fc-security-secrets-manager",
    category: "Security",
    front: "Secrets Manager vs Systems Manager Parameter Store",
    back: "Secrets Manager:\n• Auto rotation\n• RDS integration\n• $$$\n\nParameter Store:\n• Free (standard)\n• No auto rotation\n• Simple key-value\n• CloudFormation integration",
    tags: ["security", "secrets"],
    relatedServices: ["RDS", "Lambda"]
  },

  // Cost Optimization
  {
    id: "fc-cost-pricing-models",
    category: "Cost Optimization",
    front: "EC2 Pricing Models",
    back: "• On-Demand: No commitment, highest cost\n• Savings Plans: Up to 72%, $/hour commitment (flexible)\n• Reserved: Up to 72%, specific instance (less flexible)\n• Spot: Up to 90%, can be interrupted\n\nAWS recommends Savings Plans",
    tags: ["cost", "pricing", "ec2"],
    relatedServices: ["EC2"]
  },
  {
    id: "fc-cost-tools",
    category: "Cost Optimization",
    front: "AWS Cost Management Tools",
    back: "• Cost Explorer: Visualize spending, forecast\n• AWS Budgets: Set alerts, prevent overages\n• Trusted Advisor: Optimization recommendations\n• Compute Optimizer: Right-sizing ML recommendations\n• Cost Allocation Tags: Track by project/team",
    tags: ["cost", "management", "tools"],
    relatedServices: []
  },
  {
    id: "fc-cost-s3-optimization",
    category: "Cost Optimization",
    front: "S3 Cost Optimization Strategies",
    back: "• Use Intelligent-Tiering for unknown patterns\n• Lifecycle policies for predictable transitions\n• Delete incomplete multipart uploads\n• Use S3 Select (query in place)\n• Glacier for archival\n• Monitor with S3 Storage Lens",
    tags: ["cost", "s3", "storage"],
    relatedServices: ["S3"]
  },

  // CloudWatch & Monitoring
  {
    id: "fc-monitoring-cloudwatch-logs",
    category: "Monitoring",
    front: "CloudWatch Logs - Key Features",
    back: "Centralized log management\n• Log Groups: Collection of log streams\n• Log Streams: Sequence of log events\n• Retention: 1 day to 10 years (custom)\n• Export to S3, stream to Lambda/Kinesis\n• Insights: Query and analyze logs",
    tags: ["monitoring", "cloudwatch", "logs"],
    relatedServices: ["Lambda", "EC2", "CloudTrail"]
  },
  {
    id: "fc-monitoring-cloudwatch-metrics",
    category: "Monitoring",
    front: "CloudWatch Metrics & Alarms",
    back: "Default: 5-minute intervals (free)\n• Detailed: 1-minute intervals (paid)\n• Custom Metrics: Your own data\n• Alarms: 3 states (OK, ALARM, INSUFFICIENT_DATA)\n• Actions: SNS, Auto Scaling, EC2 actions\n• Composite alarms: Multiple alarm conditions",
    tags: ["monitoring", "cloudwatch", "metrics", "alarms"],
    relatedServices: ["SNS", "Auto Scaling", "EC2"]
  },
  {
    id: "fc-monitoring-cloudwatch-insights",
    category: "Monitoring",
    front: "CloudWatch Insights Types",
    back: "Logs Insights: SQL-like query for logs\n• Container Insights: ECS, EKS, K8s metrics\n• Lambda Insights: Lambda performance\n• Application Insights: Auto dashboard for apps\n• Use: Troubleshooting, performance analysis",
    tags: ["monitoring", "cloudwatch", "insights"],
    relatedServices: ["Lambda", "ECS", "EKS"]
  },
  {
    id: "fc-monitoring-cloudtrail",
    category: "Monitoring",
    front: "AWS CloudTrail - Purpose",
    back: "Governance, compliance, audit logging\n• Records AWS API calls\n• Events: Management, Data, Insights\n• 90-day history free\n• Trail: Deliver to S3, CloudWatch Logs\n• Use: Security analysis, compliance, troubleshooting",
    tags: ["monitoring", "cloudtrail", "audit", "compliance"],
    relatedServices: ["S3", "CloudWatch Logs"]
  },
  {
    id: "fc-monitoring-aws-config",
    category: "Monitoring",
    front: "AWS Config - Compliance Tracking",
    back: "Resource inventory and configuration history\n• Config Rules: Evaluate compliance\n• Remediation: Auto-fix non-compliant\n• Aggregator: Multi-account/region view\n• Use: Compliance auditing, change tracking",
    tags: ["monitoring", "config", "compliance"],
    relatedServices: ["CloudTrail", "Lambda"]
  },

  // Advanced VPC & Networking
  {
    id: "fc-network-vpc-endpoints",
    category: "Networking",
    front: "VPC Endpoints - Types",
    back: "Private AWS service access (no IGW needed)\n• Gateway Endpoints: S3, DynamoDB (route table)\n• Interface Endpoints: Most services (ENI + DNS)\n• Gateway Load Balancer Endpoints: Third-party appliances\n• Use: Security, reduced data transfer costs",
    tags: ["networking", "vpc", "endpoints", "privatelink"],
    relatedServices: ["S3", "DynamoDB", "PrivateLink"]
  },
  {
    id: "fc-network-privatelink",
    category: "Networking",
    front: "AWS PrivateLink",
    back: "Private connectivity to services\n• Expose your service to other VPCs\n• No VPC peering/NAT/IGW needed\n• Service Provider → Service Consumer\n• Uses Interface VPC Endpoints\n• Use: SaaS applications, shared services",
    tags: ["networking", "privatelink", "vpc"],
    relatedServices: ["VPC Endpoints", "NLB"]
  },
  {
    id: "fc-network-transit-gateway",
    category: "Networking",
    front: "AWS Transit Gateway",
    back: "Central hub for VPC connectivity\n• Connects thousands of VPCs + on-premises\n• Replaces complex VPC peering\n• Route Tables: Control traffic flow\n• Cross-region peering supported\n• Use: Simplify network topology",
    tags: ["networking", "transit-gateway", "vpc", "hybrid"],
    relatedServices: ["VPC", "Direct Connect", "VPN"]
  },
  {
    id: "fc-network-vpc-flow-logs",
    category: "Networking",
    front: "VPC Flow Logs",
    back: "Capture IP traffic information\n• Levels: VPC, Subnet, or ENI\n• Publish to: CloudWatch Logs or S3\n• Use: Troubleshooting, security analysis\n• Cannot enable for peered VPCs (unless same account)\n• Not real-time (delayed)",
    tags: ["networking", "vpc", "flow-logs", "monitoring"],
    relatedServices: ["CloudWatch", "S3"]
  },

  // Advanced S3 Features
  {
    id: "fc-storage-s3-versioning",
    category: "Storage",
    front: "S3 Versioning & MFA Delete",
    back: "Versioning: Keep all versions of objects\n• Once enabled, can only suspend (not disable)\n• Deletes create delete marker (recoverable)\n• MFA Delete: Requires MFA to delete versions\n• Use: Protect from accidental deletion, compliance",
    tags: ["storage", "s3", "versioning", "security"],
    relatedServices: ["S3"]
  },
  {
    id: "fc-storage-s3-replication",
    category: "Storage",
    front: "S3 Replication - CRR vs SRR",
    back: "Cross-Region Replication (CRR):\n• Compliance, lower latency, disaster recovery\n\nSame-Region Replication (SRR):\n• Log aggregation, prod/test sync\n\nBoth:\n• Versioning required\n• Async replication\n• Can change storage class",
    tags: ["storage", "s3", "replication", "disaster-recovery"],
    relatedServices: ["S3"]
  },
  {
    id: "fc-storage-s3-encryption",
    category: "Storage",
    front: "S3 Encryption Options",
    back: "Server-Side:\n• SSE-S3: AWS managed keys (default)\n• SSE-KMS: AWS KMS keys (audit trail)\n• SSE-C: Customer-provided keys\n\nClient-Side:\n• Encrypt before upload\n\nTransit: HTTPS/TLS\nBucket policies can enforce encryption",
    tags: ["storage", "s3", "encryption", "security"],
    relatedServices: ["KMS"]
  },
  {
    id: "fc-storage-s3-lifecycle",
    category: "Storage",
    front: "S3 Lifecycle Policies",
    back: "Automate storage class transitions\n• Transition actions: Move to cheaper classes\n• Expiration actions: Delete old versions\n• Rules: Prefix or tag-based\n• Example: After 30 days → IA, after 90 → Glacier\n• Use: Cost optimization, compliance",
    tags: ["storage", "s3", "lifecycle", "cost-optimization"],
    relatedServices: ["S3"]
  },

  // Advanced Lambda Features
  {
    id: "fc-compute-lambda-concurrency",
    category: "Compute",
    front: "Lambda Concurrency Limits",
    back: "Default: 1000 concurrent executions per region\n• Reserved Concurrency: Guarantee for function\n• Provisioned Concurrency: Pre-warmed instances\n• Throttling: 429 error if limit exceeded\n• Use reserved to prevent one function consuming all",
    tags: ["compute", "lambda", "serverless", "concurrency"],
    relatedServices: ["Lambda"]
  },
  {
    id: "fc-compute-lambda-layers",
    category: "Compute",
    front: "Lambda Layers",
    back: "Reusable code/dependencies\n• Up to 5 layers per function\n• Share across functions\n• Reduces deployment package size\n• Use: Common libraries, custom runtimes\n• Can be shared cross-account",
    tags: ["compute", "lambda", "serverless", "layers"],
    relatedServices: ["Lambda"]
  },
  {
    id: "fc-compute-lambda-edge",
    category: "Compute",
    front: "Lambda@Edge vs CloudFront Functions",
    back: "Lambda@Edge:\n• Node.js/Python, more compute, ms latency\n• CloudFront events, network access\n\nCloudFront Functions:\n• JavaScript, lightweight, sub-ms latency\n• Viewer request/response only\n\nBoth: Run at edge locations",
    tags: ["compute", "lambda", "cloudfront", "edge"],
    relatedServices: ["CloudFront"]
  },

  // CloudFront & Content Delivery
  {
    id: "fc-network-cloudfront",
    category: "Networking",
    front: "Amazon CloudFront - Key Features",
    back: "Global CDN - 400+ edge locations\n• Origins: S3, ALB, EC2, custom HTTP\n• OAI: Origin Access Identity for S3\n• Cache behaviors: Path pattern routing\n• Signed URLs/Cookies: Restrict access\n• Use: Low latency, DDoS protection",
    tags: ["networking", "cloudfront", "cdn", "content-delivery"],
    relatedServices: ["S3", "ALB", "Shield"]
  },
  {
    id: "fc-network-global-accelerator",
    category: "Networking",
    front: "AWS Global Accelerator",
    back: "Improve global application performance\n• 2 static Anycast IPs\n• Traffic to nearest edge, then AWS backbone\n• Health checks + failover\n• vs CloudFront: TCP/UDP (not HTTP), no caching\n• Use: Non-HTTP protocols, static IPs needed",
    tags: ["networking", "global-accelerator", "performance"],
    relatedServices: ["CloudFront", "ELB"]
  },

  // Security Services
  {
    id: "fc-security-guardduty",
    category: "Security",
    front: "Amazon GuardDuty",
    back: "Intelligent threat detection\n• Analyzes: CloudTrail, VPC Flow Logs, DNS logs\n• Machine learning\n• Findings: Account compromise, instance compromise\n• No agents required\n• Use: Continuous security monitoring",
    tags: ["security", "guardduty", "threat-detection"],
    relatedServices: ["CloudTrail", "VPC Flow Logs"]
  },
  {
    id: "fc-security-inspector",
    category: "Security",
    front: "Amazon Inspector",
    back: "Automated security assessment\n• EC2: Agent-based, vulnerabilities, best practices\n• ECR: Container image scanning\n• Lambda: Code and dependencies\n• Findings: Risk score + remediation\n• Use: Compliance, vulnerability management",
    tags: ["security", "inspector", "vulnerability"],
    relatedServices: ["EC2", "ECR", "Lambda"]
  },
  {
    id: "fc-security-acm",
    category: "Security",
    front: "AWS Certificate Manager (ACM)",
    back: "Provision, manage TLS/SSL certificates\n• Free public certificates\n• Auto-renewal\n• Integrates: ELB, CloudFront, API Gateway\n• Private CA available (paid)\n• Use: HTTPS for websites/APIs",
    tags: ["security", "acm", "certificates", "tls"],
    relatedServices: ["ELB", "CloudFront", "API Gateway"]
  },
  {
    id: "fc-security-systems-manager",
    category: "Security",
    front: "AWS Systems Manager",
    back: "Operational management tool\n• Session Manager: SSH without keys\n• Patch Manager: Automate patching\n• Parameter Store: Config/secrets storage\n• Run Command: Execute commands at scale\n• Automation: Runbooks\n• Use: Centralized operations",
    tags: ["security", "systems-manager", "operations"],
    relatedServices: ["EC2", "Parameter Store"]
  },

  // Disaster Recovery
  {
    id: "fc-dr-strategies",
    category: "Disaster Recovery",
    front: "Disaster Recovery Strategies",
    back: "Order by RPO/RTO (fastest to slowest):\n1. Multi-Site/Hot Site: Active-active (lowest RTO)\n2. Warm Standby: Scaled-down active system\n3. Pilot Light: Minimal critical core\n4. Backup & Restore: Cheapest (highest RTO)\n\nRPO: Recovery Point Objective (data loss)\nRTO: Recovery Time Objective (downtime)",
    tags: ["disaster-recovery", "rpo", "rto", "availability"],
    relatedServices: ["Backup", "S3"]
  },
  {
    id: "fc-dr-aws-backup",
    category: "Disaster Recovery",
    front: "AWS Backup",
    back: "Centralized backup management\n• Backup Plans: Schedule, retention, lifecycle\n• Supports: EBS, RDS, Aurora, DynamoDB, EFS, FSx, more\n• Cross-region backup copy\n• Backup Vault Lock: WORM protection\n• Use: Compliance, centralized backup policy",
    tags: ["disaster-recovery", "backup", "compliance"],
    relatedServices: ["EBS", "RDS", "S3"]
  },

  // Organizations & Governance
  {
    id: "fc-security-organizations",
    category: "Security",
    front: "AWS Organizations & SCPs",
    back: "Multi-account management\n• Organizational Units (OUs): Group accounts\n• Service Control Policies (SCPs): Permission boundaries\n• Consolidated billing\n• SCPs: Only restrict, never grant permissions\n• Use: Centralized governance, cost management",
    tags: ["security", "organizations", "governance", "scp"],
    relatedServices: ["IAM", "Control Tower"]
  }
];

export const categories = Array.from(new Set(flashcards.map(card => card.category))).sort();
