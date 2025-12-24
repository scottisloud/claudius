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
    back: "• Retire: Decommission\n• Retain: Keep on-premises\n• Relocate: VMware Cloud\n• Rehost: Lift-and-shift\n• Repurchase: Move to SaaS\n• Replatform: Lift-tinker-shift\n• Refactor: Re-architect",
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
    back: "• DataSync: One-time/scheduled, agent-based, 10x faster\n• Storage Gateway: Ongoing hybrid, local caching\n• Transfer Family: SFTP/FTP to S3, protocol compatibility\n• Snow Family: Offline/bandwidth-limited, physical devices\n• Direct Connect: Dedicated network connection",
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
    id: "fc-database-rds-backups",
    category: "Database",
    front: "RDS Automated Backups vs Snapshots",
    back: "Automated Backups:\n• Daily full backup + transaction logs\n• Point-in-time recovery (5-minute intervals)\n• Retention: 1-35 days (default 7)\n• Deleted when DB is deleted\n\nManual Snapshots:\n• User-initiated, stored in S3\n• Never expire (until manually deleted)\n• Persist after DB deletion\n• Can copy cross-region",
    tags: ["database", "rds", "backup", "disaster-recovery"],
    relatedServices: ["S3", "Aurora"]
  },
  {
    id: "fc-database-rds-encryption",
    category: "Database",
    front: "RDS Encryption",
    back: "At-rest encryption:\n• Uses AWS KMS\n• Must enable at creation time\n• Cannot encrypt existing unencrypted DB (must create new)\n• Snapshots are encrypted if source is encrypted\n\nIn-transit:\n• SSL/TLS available for all engines\n• Enforce with parameter groups\n\nRead replicas: Inherit encryption from primary",
    tags: ["database", "rds", "encryption", "security"],
    relatedServices: ["KMS"]
  },
  {
    id: "fc-database-dynamodb-capacity",
    category: "Database",
    front: "DynamoDB Capacity Modes",
    back: "On-Demand:\n• Pay per request\n• No capacity planning\n• Use: Unpredictable/spiky workloads\n• More expensive per request\n\nProvisioned:\n• Specify RCU/WCU\n• Auto-scaling available\n• Use: Predictable traffic\n• Reserved capacity for savings (1-3 years)",
    tags: ["database", "dynamodb", "capacity", "pricing"],
    relatedServices: ["DynamoDB"]
  },
  {
    id: "fc-database-dax",
    category: "Database",
    front: "DynamoDB Accelerator (DAX)",
    back: "In-memory cache for DynamoDB\n• Microsecond latency (vs milliseconds)\n• No application changes required (DynamoDB-compatible)\n• Write-through caching\n• 10x performance improvement\n• Use: Read-heavy workloads, gaming, real-time bidding\n• Not for strongly consistent reads from cache",
    tags: ["database", "dynamodb", "cache", "performance"],
    relatedServices: ["DynamoDB"]
  },
  {
    id: "fc-database-rds-proxy",
    category: "Database",
    front: "Amazon RDS Proxy",
    back: "Connection pool manager for RDS\n• Reduces connection overhead\n• Improves failover time (66% faster)\n• Enforces IAM authentication\n• Never publicly accessible (VPC only)\n• Use: Lambda to RDS, high connection churn\n• Supports: MySQL, PostgreSQL, Aurora",
    tags: ["database", "rds", "proxy", "serverless"],
    relatedServices: ["RDS", "Aurora", "Lambda"]
  },
  {
    id: "fc-database-antipatterns",
    category: "Database",
    front: "RDS Anti-Patterns (When NOT to Use)",
    back: "DON'T use RDS for:\n• Need root access → Use EC2 with database\n• Schema-less data → Use DynamoDB\n• Massive scale/throughput → Use DynamoDB\n• Temporary/scratch data → ElastiCache\n• Complex joins on huge datasets → Redshift\n• Blob/file storage → S3\n• Automated scaling to zero → Aurora Serverless v2",
    tags: ["database", "rds", "anti-patterns"],
    relatedServices: ["DynamoDB", "S3", "Redshift"]
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
    id: "fc-integration-sqs-dlq",
    category: "Integration",
    front: "SQS Dead Letter Queue (DLQ)",
    back: "Queue for messages that fail processing\n• Set maximum receives (1-1000)\n• Failed messages moved to DLQ\n• Analyze failures without blocking main queue\n• DLQ must be same type (Standard/FIFO)\n• Set retention period longer than source queue\n• Use: Debugging, handling poison messages",
    tags: ["integration", "sqs", "dead-letter-queue", "error-handling"],
    relatedServices: ["SQS", "Lambda"]
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
    back: "• SQS: Pull-based, persistent, decouple/buffer\n• SNS: Push-based, no persistence, fan-out\n• EventBridge: Event-driven, content-based routing, SaaS\n\nCommon pattern: SNS → multiple SQS queues",
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
  {
    id: "fc-compute-ec2-instance-metadata",
    category: "Compute",
    front: "EC2 Instance Metadata Service (IMDS)",
    back: "Access instance information from within EC2\n• URL: http://169.254.169.254/latest/meta-data/\n• IMDSv1: Request/response (less secure)\n• IMDSv2: Session-oriented, token-based (recommended)\n• Access: IAM role credentials, instance ID, public IP\n• Use: Dynamic configuration, automation scripts",
    tags: ["compute", "ec2", "metadata"],
    relatedServices: ["IAM"]
  },
  {
    id: "fc-compute-ec2-user-data",
    category: "Compute",
    front: "EC2 User Data",
    back: "Bootstrap script for instance launch\n• Runs once at first boot (root user)\n• Use: Install software, configure settings\n• Max size: 16 KB\n• Can be retrieved via metadata service\n• Common use: Automated setup, configuration management",
    tags: ["compute", "ec2", "automation"],
    relatedServices: []
  },
  {
    id: "fc-compute-ec2-placement-groups",
    category: "Compute",
    front: "EC2 Placement Groups",
    back: "Control instance placement strategy:\n• Cluster: Low latency, same AZ (HPC)\n• Spread: Max 7 instances/AZ, different hardware (HA)\n• Partition: Divides instances into partitions, different racks (big data)\n\nUse:\n• Cluster: Big data jobs requiring low latency\n• Spread: Critical apps needing isolation\n• Partition: HDFS, Cassandra, Kafka",
    tags: ["compute", "ec2", "placement", "performance"],
    relatedServices: []
  },
  {
    id: "fc-compute-ec2-elastic-ip",
    category: "Compute",
    front: "Elastic IP Addresses",
    back: "Static public IPv4 address\n• Remains yours until you release it\n• Can remap to another instance quickly\n• Charged when NOT attached to running instance\n• Limit: 5 per region (can request increase)\n• Use: Mask instance failure, DNS failover\n• Anti-pattern: Use DNS (Route 53) instead if possible",
    tags: ["compute", "ec2", "networking", "ip"],
    relatedServices: ["Route 53"]
  },
  {
    id: "fc-compute-ec2-instance-store",
    category: "Compute",
    front: "EC2 Instance Store vs EBS",
    back: "Instance Store:\n• Ephemeral, physically attached\n• Lost on stop/termination\n• Very high IOPS (millions)\n• No additional cost\n• Use: Temporary data, caching, buffers\n\nEBS:\n• Persistent network storage\n• Survives stop/termination (if configured)\n• Use: Long-term data, databases",
    tags: ["compute", "ec2", "storage"],
    relatedServices: ["EBS"]
  },
  {
    id: "fc-compute-auto-scaling-policies",
    category: "Compute",
    front: "Auto Scaling Policy Types",
    back: "• Target Tracking: Maintain metric at target (e.g., 50% CPU)\n• Step Scaling: Scale based on CloudWatch alarm thresholds\n• Simple Scaling: Single adjustment (legacy)\n• Scheduled Scaling: Time-based (predictable patterns)\n• Predictive Scaling: ML-based forecasting\n\nRecommended: Target Tracking for most use cases",
    tags: ["compute", "auto-scaling", "scaling"],
    relatedServices: ["CloudWatch", "EC2"]
  },
  {
    id: "fc-compute-batch",
    category: "Compute",
    front: "AWS Batch",
    back: "Fully managed batch processing\n• Automatically provisions EC2/Spot instances\n• Job queues and scheduling\n• Docker container-based\n• Integrates with ECS\n• Use: Large-scale batch jobs, ETL, financial modeling\n• vs Lambda: For jobs >15 min or requiring dependencies\n• No additional charge (pay for resources)",
    tags: ["compute", "batch", "containers"],
    relatedServices: ["ECS", "EC2", "Spot"]
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
  {
    id: "fc-storage-ebs-snapshots",
    category: "Storage",
    front: "EBS Snapshots",
    back: "Point-in-time backups stored in S3\n• Incremental (only changed blocks)\n• Can copy cross-region/account\n• Create AMI from snapshot\n• Data Lifecycle Manager: Automate snapshot creation\n• Fast Snapshot Restore: No I/O latency on first access\n• Archive tier: 75% cheaper, 24-72h restore",
    tags: ["storage", "ebs", "snapshots", "backup"],
    relatedServices: ["S3", "EC2"]
  },
  {
    id: "fc-storage-ebs-encryption",
    category: "Storage",
    front: "EBS Encryption",
    back: "Encryption at rest and in transit\n• Uses AWS KMS\n• Can encrypt at creation or copy to encrypt\n• All snapshots encrypted if volume is encrypted\n• Minimal performance impact\n• Can enable encryption by default (account level)\n• Copy unencrypted snapshot → Create encrypted volume",
    tags: ["storage", "ebs", "encryption", "security"],
    relatedServices: ["KMS"]
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
    id: "fc-security-iam-identities",
    category: "Security",
    front: "IAM Users vs Groups vs Roles",
    back: "Users:\n• Long-term credentials (password/access keys)\n• Represents a person or service\n\nGroups:\n• Collection of users\n• Attach policies to groups (NOT roles)\n\nRoles:\n• Temporary credentials via STS\n• For AWS services, cross-account, federation\n• No long-term credentials",
    tags: ["security", "iam", "identities"],
    relatedServices: ["STS"]
  },
  {
    id: "fc-security-iam-policy-structure",
    category: "Security",
    front: "IAM Policy Structure",
    back: "JSON document with:\n• Effect: Allow or Deny\n• Action: API calls (e.g., s3:GetObject)\n• Resource: ARN of resource\n• Condition: Optional constraints\n\nTypes:\n• Identity-based: Attached to users/groups/roles\n• Resource-based: Attached to resources (S3, SQS)\n• Permission boundaries: Max permissions limit",
    tags: ["security", "iam", "policies"],
    relatedServices: []
  },
  {
    id: "fc-security-sts",
    category: "Security",
    front: "AWS STS (Security Token Service)",
    back: "Provides temporary security credentials\n• AssumeRole: Switch roles (cross-account, federation)\n• Valid for: 15 mins to 12 hours\n• Use cases: Cross-account access, federation, EC2 roles\n• More secure than long-term access keys",
    tags: ["security", "sts", "temporary-credentials"],
    relatedServices: ["IAM"]
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
    id: "fc-cost-trusted-advisor",
    category: "Cost Optimization",
    front: "AWS Trusted Advisor",
    back: "Real-time best practice recommendations\n5 Categories:\n• Cost Optimization: Idle resources, RI recommendations\n• Performance: Service limits, throughput\n• Security: Open security groups, IAM use\n• Fault Tolerance: Multi-AZ, backups\n• Service Limits: Usage vs limits\n\nBasic/Developer: 7 core checks\nBusiness/Enterprise: All checks + API access",
    tags: ["cost", "optimization", "trusted-advisor", "best-practices"],
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
  {
    id: "fc-network-vpn-types",
    category: "Networking",
    front: "AWS VPN: Site-to-Site vs Client VPN",
    back: "Site-to-Site VPN:\n• Connect on-premises network to VPC\n• Uses Virtual Private Gateway or Transit Gateway\n• IPsec encrypted\n• Multiple connections for HA\n\nClient VPN:\n• Remote users connect to AWS/on-premises\n• OpenVPN-based\n• Managed service\n• Use: Remote workforce access",
    tags: ["networking", "vpn", "hybrid"],
    relatedServices: ["Direct Connect", "Transit Gateway"]
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
  {
    id: "fc-storage-s3-security",
    category: "Storage",
    front: "S3 Security: Bucket Policies vs ACLs",
    back: "Bucket Policies:\n• JSON-based, more flexible\n• Can grant cross-account access\n• Recommended approach\n\nACLs (Access Control Lists):\n• Legacy, less flexible\n• Object-level or bucket-level\n• AWS recommends disabling ACLs\n\nBlock Public Access:\n• Account or bucket-level settings\n• Override all other policies",
    tags: ["storage", "s3", "security"],
    relatedServices: ["IAM"]
  },
  {
    id: "fc-storage-s3-presigned-urls",
    category: "Storage",
    front: "S3 Pre-signed URLs",
    back: "Temporary access to private objects\n• Generated using your credentials\n• Expiration time (up to 12 hours with IAM user)\n• Use: Share private files temporarily\n• Common use: Upload/download without AWS credentials\n• Can be generated via SDK or CLI",
    tags: ["storage", "s3", "security", "presigned-urls"],
    relatedServices: ["CloudFront"]
  },
  {
    id: "fc-storage-s3-transfer-acceleration",
    category: "Storage",
    front: "S3 Transfer Acceleration",
    back: "Fast transfer over long distances\n• Uses CloudFront edge locations\n• Upload to edge → AWS backbone to S3\n• 50-500% faster for distant locations\n• Compatible with multipart upload\n• Pricing: Extra $0.04-0.08 per GB\n• Use: Global uploads, large files",
    tags: ["storage", "s3", "performance", "transfer"],
    relatedServices: ["CloudFront"]
  },
  {
    id: "fc-storage-s3-antipatterns",
    category: "Storage",
    front: "S3 Anti-Patterns (When NOT to Use)",
    back: "DON'T use S3 for:\n• High-frequency updates (>100 updates/sec) → DynamoDB\n• File system with POSIX permissions → EFS\n• Block storage for databases → EBS\n• Temporary storage for compute → Instance Store\n• Structured queries (use S3 + Athena instead)\n• Real-time data processing → Kinesis\n• Low-latency access (<10ms) → ElastiCache",
    tags: ["storage", "s3", "anti-patterns"],
    relatedServices: ["EFS", "EBS", "DynamoDB"]
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
  {
    id: "fc-compute-lambda-antipatterns",
    category: "Compute",
    front: "Lambda Anti-Patterns (When NOT to Use)",
    back: "DON'T use Lambda for:\n• Long-running processes (>15 min) → Use ECS/Batch\n• Stateful applications → Use EC2 or store state externally\n• High-memory applications (>10 GB) → Use EC2\n• Predictable, constant workload → EC2 may be cheaper\n• Complex dependencies (>250 MB) → Use containers/EC2\n• Applications requiring specialized hardware/GPUs",
    tags: ["compute", "lambda", "anti-patterns", "serverless"],
    relatedServices: ["EC2", "ECS", "Batch"]
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
    back: "Order by RPO/RTO (fastest to slowest):\n• Multi-Site/Hot Site: Active-active, full capacity (lowest RTO/RPO)\n• Warm Standby: Scaled-down active system, always running\n• Pilot Light: Minimal critical core, ready to scale\n• Backup & Restore: Restore from backup (cheapest, highest RTO/RPO)",
    tags: ["disaster-recovery", "rpo", "rto", "availability"],
    relatedServices: ["Backup", "S3"]
  },
  {
    id: "fc-dr-rpo-rto",
    category: "Disaster Recovery",
    front: "RPO vs RTO",
    back: "RPO (Recovery Point Objective):\n• How much data loss is acceptable?\n• Time between last backup and disaster\n• Example: 1-hour RPO = lose up to 1 hour of data\n\nRTO (Recovery Time Objective):\n• How much downtime is acceptable?\n• Time to restore operations\n• Example: 4-hour RTO = back online within 4 hours",
    tags: ["disaster-recovery", "rpo", "rto"],
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

  // Application Services
  {
    id: "fc-app-cognito",
    category: "Security",
    front: "Amazon Cognito: User Pools vs Identity Pools",
    back: "User Pools:\n• User directory for sign-up/sign-in\n• Social/enterprise identity federation\n• Returns JWT tokens\n• Use: Authentication\n\nIdentity Pools:\n• Provide AWS credentials (temporary)\n• Access AWS services directly\n• Can use User Pool tokens\n• Use: Authorization to AWS resources",
    tags: ["security", "cognito", "authentication", "authorization"],
    relatedServices: ["IAM", "API Gateway"]
  },
  {
    id: "fc-app-cloudformation",
    category: "Compute",
    front: "AWS CloudFormation Basics",
    back: "Infrastructure as Code (IaC)\n• Template: JSON/YAML definition\n• Stack: Deployed resources\n• Change Sets: Preview changes before apply\n• StackSets: Deploy across accounts/regions\n• Drift detection: Find manual changes\n• Rollback on failure\n• Free (pay for resources only)",
    tags: ["compute", "cloudformation", "iac", "automation"],
    relatedServices: []
  },
  {
    id: "fc-app-well-architected",
    category: "Compute",
    front: "AWS Well-Architected Framework - 6 Pillars",
    back: "1. Operational Excellence: Run/monitor systems\n2. Security: Protect information & systems\n3. Reliability: Recover from failures, meet demand\n4. Performance Efficiency: Use resources efficiently\n5. Cost Optimization: Avoid unnecessary costs\n6. Sustainability: Minimize environmental impact\n\nUse: Design decisions, architecture reviews",
    tags: ["architecture", "best-practices", "framework"],
    relatedServices: []
  },
  {
    id: "fc-app-support-plans",
    category: "Cost Optimization",
    front: "AWS Support Plans",
    back: "Basic (Free):\n• Customer service, forums, Trusted Advisor (7 checks)\n\nDeveloper ($29+):\n• Business hours email, 12-24h response\n\nBusiness ($100+):\n• 24/7 phone/chat, <1h for production down, full Trusted Advisor\n\nEnterprise ($15,000+):\n• TAM, <15min for critical, Concierge Support",
    tags: ["support", "pricing", "management"],
    relatedServices: ["Trusted Advisor"]
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
