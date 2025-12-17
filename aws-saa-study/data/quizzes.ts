export interface QuizQuestion {
  id: string;
  domain: string;
  week?: number;
  question: string;
  options: string[];
  correctAnswer: number | number[]; // Single index or multiple indices for multi-select
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  references?: string[];
  multiSelect?: boolean;
}

export interface QuizAttempt {
  questionId: string;
  selectedAnswer: number | number[];
  isCorrect: boolean;
  timeSpent?: number;
}

export interface QuizResult {
  id: string;
  date: string;
  domain: string;
  questions: QuizAttempt[];
  score: number;
  totalQuestions: number;
  timeSpent: number;
}

// Initial set of quiz questions - will expand with more from reference materials
export const quizQuestions: QuizQuestion[] = [
  // Week 1: Analytics
  {
    id: "q-analytics-1",
    domain: "Analytics",
    week: 1,
    question: "Which AWS service should you use for ad-hoc SQL queries directly on S3 data without provisioning any infrastructure?",
    options: [
      "Amazon Athena",
      "Amazon EMR",
      "Amazon Redshift",
      "AWS Glue"
    ],
    correctAnswer: 0,
    explanation: "Amazon Athena is the correct choice. It's a serverless interactive query service that allows you to analyze data directly in S3 using standard SQL, with no infrastructure to manage. You pay only $5 per TB of data scanned. EMR requires cluster management, Redshift is a data warehouse (not ad-hoc on S3), and Glue is primarily for ETL.",
    difficulty: "medium",
    references: ["https://aws.amazon.com/athena/faqs/"]
  },
  {
    id: "q-analytics-2",
    domain: "Analytics",
    week: 1,
    question: "Your application needs to process real-time streaming data from IoT devices. The data must be processed with sub-second latency. What is the MOST appropriate service?",
    options: [
      "Amazon Kinesis Data Firehose",
      "Amazon Kinesis Data Streams",
      "Amazon SQS",
      "AWS Glue Streaming"
    ],
    correctAnswer: 1,
    explanation: "Kinesis Data Streams is correct for real-time processing with sub-second latency. It provides real-time data streaming with custom processing. Kinesis Firehose has a minimum 60-second latency (near real-time, not real-time), SQS is for message queuing (not streaming), and Glue Streaming has higher latency than Kinesis Data Streams.",
    difficulty: "medium",
    references: ["https://aws.amazon.com/kinesis/data-streams/"]
  },
  {
    id: "q-analytics-3",
    domain: "Analytics",
    week: 1,
    question: "A company needs to automatically discover schemas and create a metadata catalog for data stored in S3, RDS, and Redshift. Which service should they use?",
    options: [
      "Amazon Athena",
      "AWS Glue",
      "Amazon EMR",
      "AWS Data Pipeline"
    ],
    correctAnswer: 1,
    explanation: "AWS Glue is the correct answer. Glue Crawlers automatically discover schemas and populate the Glue Data Catalog, which serves as a centralized metadata repository. Athena uses the catalog but doesn't create it, EMR is for big data processing, and Data Pipeline is for data workflow orchestration.",
    difficulty: "easy",
    references: ["https://aws.amazon.com/glue/faqs/"]
  },
  {
    id: "q-analytics-4",
    domain: "Analytics",
    week: 2,
    question: "Which feature of Amazon Redshift allows you to query data directly in S3 without loading it into Redshift?",
    options: [
      "Redshift Spectrum",
      "Redshift Serverless",
      "Redshift Managed Storage",
      "Redshift Federated Query"
    ],
    correctAnswer: 0,
    explanation: "Redshift Spectrum is the correct answer. It extends Redshift queries to data stored in S3 without needing to load the data. Serverless is about not managing clusters, Managed Storage is automatic storage management, and Federated Query is for querying external databases (not S3).",
    difficulty: "medium",
    references: ["https://aws.amazon.com/redshift/"]
  },

  // Migration & Transfer
  {
    id: "q-migration-1",
    domain: "Migration",
    week: 3,
    question: "You need to migrate an on-premises Oracle database to Amazon Aurora PostgreSQL. Which AWS service combination is MOST appropriate?",
    options: [
      "AWS Database Migration Service (DMS) only",
      "AWS DMS + AWS Schema Conversion Tool (SCT)",
      "AWS DataSync + AWS DMS",
      "AWS Application Migration Service (MGN)"
    ],
    correctAnswer: 1,
    explanation: "DMS + SCT is correct for heterogeneous database migrations (different engines). SCT converts the schema from Oracle to PostgreSQL, then DMS handles the data migration and continuous replication. DMS alone works for homogeneous migrations, DataSync is for file transfers, and MGN is for server migrations.",
    difficulty: "medium",
    references: ["https://aws.amazon.com/dms/"]
  },
  {
    id: "q-migration-2",
    domain: "Migration",
    week: 3,
    question: "A company needs to transfer 50TB of data from their on-premises NAS to S3. They have a 100 Mbps internet connection. What is the MOST cost-effective and fastest solution?",
    options: [
      "Use AWS DataSync",
      "Order an AWS Snowball Edge Storage Optimized device",
      "Use AWS Storage Gateway",
      "Use S3 Transfer Acceleration"
    ],
    correctAnswer: 1,
    explanation: "Snowball Edge Storage Optimized is correct for large one-time transfers with limited bandwidth. 50TB over 100 Mbps would take weeks. Snowball (80TB capacity) can transfer in days. DataSync works but would be slow, Storage Gateway is for ongoing hybrid storage, and Transfer Acceleration doesn't solve bandwidth limitations.",
    difficulty: "hard",
    references: ["https://aws.amazon.com/snowball/"]
  },
  {
    id: "q-migration-3",
    domain: "Migration",
    week: 3,
    question: "Which migration strategy involves moving an application to the cloud without making any changes?",
    options: [
      "Replatform",
      "Refactor",
      "Rehost",
      "Repurchase"
    ],
    correctAnswer: 2,
    explanation: "Rehost (also called 'lift-and-shift') is correct. It means migrating without changes. Replatform makes some optimizations, Refactor re-architects the application, and Repurchase means moving to SaaS.",
    difficulty: "easy",
    references: ["https://aws.amazon.com/prescriptive-guidance/"]
  },

  // Database
  {
    id: "q-database-1",
    domain: "Database",
    week: 4,
    question: "What is the PRIMARY purpose of RDS Multi-AZ deployments?",
    options: [
      "Improve read performance by distributing queries",
      "Provide high availability with automatic failover",
      "Reduce costs by using multiple smaller instances",
      "Enable cross-region replication"
    ],
    correctAnswer: 1,
    explanation: "Multi-AZ provides high availability (HA) with automatic failover, NOT read scaling. It uses synchronous replication to a standby instance that does NOT serve reads. For read scaling, use Read Replicas. Multi-AZ is same-region only and costs more (not less).",
    difficulty: "medium",
    references: ["https://aws.amazon.com/rds/features/multi-az/"]
  },
  {
    id: "q-database-2",
    domain: "Database",
    week: 4,
    question: "Which of the following are characteristics of RDS Read Replicas? (Select TWO)",
    options: [
      "Synchronous replication from primary",
      "Asynchronous replication from primary",
      "Can be promoted to standalone database",
      "Automatic failover to Read Replica",
      "Must be in the same region as primary"
    ],
    correctAnswer: [1, 2],
    multiSelect: true,
    explanation: "Read Replicas use ASYNCHRONOUS replication and CAN be promoted to standalone databases (manual promotion). They do NOT have automatic failover (that's Multi-AZ), they DO NOT use synchronous replication, and they CAN be cross-region.",
    difficulty: "hard",
    references: ["https://aws.amazon.com/rds/features/read-replicas/"]
  },
  {
    id: "q-database-3",
    domain: "Database",
    week: 4,
    question: "A company needs an in-memory caching solution that supports complex data types, persistence, and high availability. Which service should they choose?",
    options: [
      "Amazon ElastiCache for Memcached",
      "Amazon ElastiCache for Redis",
      "Amazon DynamoDB Accelerator (DAX)",
      "Amazon MemoryDB for Redis"
    ],
    correctAnswer: 1,
    explanation: "ElastiCache for Redis is correct. Redis supports complex data types, persistence, and replication/HA. Memcached doesn't support persistence or replication. DAX is specifically for DynamoDB only. MemoryDB is a durable database (not just a cache).",
    difficulty: "medium",
    references: ["https://aws.amazon.com/elasticache/"]
  },
  {
    id: "q-database-4",
    domain: "Database",
    week: 4,
    question: "How many copies of data does Amazon Aurora maintain across availability zones?",
    options: [
      "2 copies across 2 AZs (4 total)",
      "2 copies across 3 AZs (6 total)",
      "3 copies across 2 AZs (6 total)",
      "3 copies across 3 AZs (9 total)"
    ],
    correctAnswer: 1,
    explanation: "Aurora maintains 2 copies of data in each of 3 AZs, for a total of 6 copies. This provides high durability and availability. Aurora can lose up to 2 copies without affecting write availability and up to 3 copies without affecting read availability.",
    difficulty: "medium",
    references: ["https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/"]
  },

  // Integration
  {
    id: "q-integration-1",
    domain: "Integration",
    week: 5,
    question: "What is the key difference between Amazon SQS and Amazon SNS?",
    options: [
      "SQS is push-based, SNS is pull-based",
      "SQS is pull-based, SNS is push-based",
      "SQS supports pub/sub, SNS supports queuing",
      "SQS is for real-time, SNS is for batch processing"
    ],
    correctAnswer: 1,
    explanation: "SQS is PULL-based (polling/consumer retrieves messages), while SNS is PUSH-based (pub/sub, messages pushed to subscribers). SQS is for queuing/buffering, SNS is for pub/sub fan-out. Both can be real-time.",
    difficulty: "easy",
    references: ["https://aws.amazon.com/sqs/", "https://aws.amazon.com/sns/"]
  },
  {
    id: "q-integration-2",
    domain: "Integration",
    week: 5,
    question: "A microservices architecture needs to route events to different Lambda functions based on event content and patterns. Which service is BEST suited for this?",
    options: [
      "Amazon SQS",
      "Amazon SNS",
      "Amazon EventBridge",
      "AWS Step Functions"
    ],
    correctAnswer: 2,
    explanation: "EventBridge is correct for content-based event routing using rules. It's designed for event-driven architectures with pattern matching. SQS is for simple queuing, SNS is for fan-out (not content-based routing), and Step Functions is for workflow orchestration (not event routing).",
    difficulty: "medium",
    references: ["https://aws.amazon.com/eventbridge/"]
  },
  {
    id: "q-integration-3",
    domain: "Integration",
    week: 5,
    question: "What is the maximum throughput for Amazon SQS FIFO queues with batching enabled?",
    options: [
      "300 messages per second",
      "3,000 messages per second",
      "10,000 messages per second",
      "Unlimited"
    ],
    correctAnswer: 1,
    explanation: "SQS FIFO queues support 300 transactions per second by default, but with batching (10 messages per request), this increases to 3,000 messages per second. Standard queues have unlimited throughput. Remember: FIFO = ordering + exactly-once + limited throughput.",
    difficulty: "hard",
    references: ["https://aws.amazon.com/sqs/faqs/"]
  },

  // Compute
  {
    id: "q-compute-1",
    domain: "Compute",
    week: 1,
    question: "What is the maximum execution time for an AWS Lambda function?",
    options: [
      "5 minutes",
      "10 minutes",
      "15 minutes",
      "30 minutes"
    ],
    correctAnswer: 2,
    explanation: "Lambda functions have a maximum execution time of 15 minutes. If you need longer execution times, consider using ECS, Fargate, or Step Functions to coordinate multiple Lambda invocations.",
    difficulty: "easy",
    references: ["https://aws.amazon.com/lambda/faqs/"]
  },
  {
    id: "q-compute-2",
    domain: "Compute",
    week: 1,
    question: "A company wants to run containers without managing servers or clusters. Which AWS service should they use?",
    options: [
      "Amazon ECS with EC2 launch type",
      "Amazon EKS",
      "AWS Fargate",
      "AWS Elastic Beanstalk"
    ],
    correctAnswer: 2,
    explanation: "Fargate is correct - it's serverless compute for containers (no EC2 instances to manage). ECS with EC2 requires managing instances, EKS requires managing Kubernetes control plane, and Elastic Beanstalk is PaaS (not specifically for containers).",
    difficulty: "medium",
    references: ["https://aws.amazon.com/fargate/"]
  },

  // Storage
  {
    id: "q-storage-1",
    domain: "Storage",
    week: 6,
    question: "Which S3 storage class provides the LOWEST cost for archival data that may need to be retrieved within 12 hours?",
    options: [
      "S3 Glacier Instant Retrieval",
      "S3 Glacier Flexible Retrieval",
      "S3 Glacier Deep Archive",
      "S3 Intelligent-Tiering"
    ],
    correctAnswer: 2,
    explanation: "S3 Glacier Deep Archive is the lowest cost storage class and supports retrieval within 12 hours (standard retrieval). Glacier Instant has millisecond retrieval (more expensive), Glacier Flexible has minute-to-hour retrieval, and Intelligent-Tiering automatically moves between tiers.",
    difficulty: "medium",
    references: ["https://aws.amazon.com/s3/storage-classes/"]
  },
  {
    id: "q-storage-2",
    domain: "Storage",
    week: 6,
    question: "What is the difference between EBS volumes and Instance Store?",
    options: [
      "EBS is ephemeral, Instance Store is persistent",
      "EBS is persistent, Instance Store is ephemeral",
      "Both are persistent network-attached storage",
      "Both are ephemeral local storage"
    ],
    correctAnswer: 1,
    explanation: "EBS volumes are PERSISTENT network-attached storage that survives instance stops/starts. Instance Store is EPHEMERAL (temporary) physically attached storage that is lost when the instance stops or terminates. Use EBS for data that must persist.",
    difficulty: "easy",
    references: ["https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Storage.html"]
  },

  // Security
  {
    id: "q-security-1",
    domain: "Security",
    week: 4,
    question: "Which IAM policy type is attached to AWS resources (like S3 buckets) rather than identities?",
    options: [
      "Identity-based policy",
      "Resource-based policy",
      "Service control policy",
      "Permissions boundary"
    ],
    correctAnswer: 1,
    explanation: "Resource-based policies attach to resources (like S3 bucket policies, KMS key policies). Identity-based policies attach to users/groups/roles. SCPs are for AWS Organizations, and permissions boundaries limit identity-based policies.",
    difficulty: "easy",
    references: ["https://docs.aws.amazon.com/IAM/latest/UserGuide/"]
  },
  {
    id: "q-security-2",
    domain: "Security",
    week: 4,
    question: "A company needs to rotate database passwords automatically. Which AWS service should they use?",
    options: [
      "AWS Systems Manager Parameter Store",
      "AWS Secrets Manager",
      "AWS KMS",
      "Amazon Cognito"
    ],
    correctAnswer: 1,
    explanation: "Secrets Manager supports automatic rotation of secrets (including RDS passwords) with built-in integration. Parameter Store doesn't have automatic rotation. KMS is for encryption keys (not secrets rotation). Cognito is for user authentication.",
    difficulty: "medium",
    references: ["https://aws.amazon.com/secrets-manager/"]
  },

  // Cost Optimization
  {
    id: "q-cost-1",
    domain: "Cost Optimization",
    week: 6,
    question: "Which EC2 pricing model offers up to 72% savings with a commitment to a consistent amount of compute usage ($/hour) for 1 or 3 years?",
    options: [
      "Reserved Instances",
      "Savings Plans",
      "Spot Instances",
      "On-Demand Instances"
    ],
    correctAnswer: 1,
    explanation: "Savings Plans offer up to 72% savings with a $/hour commitment and are more flexible than Reserved Instances (apply to Lambda, Fargate too). Reserved Instances commit to specific instance types. Spot is up to 90% but can be interrupted. On-Demand has no commitment or savings.",
    difficulty: "medium",
    references: ["https://aws.amazon.com/savingsplans/"]
  },
  {
    id: "q-cost-2",
    domain: "Cost Optimization",
    week: 6,
    question: "Which S3 storage class automatically moves objects between access tiers based on changing access patterns?",
    options: [
      "S3 Standard",
      "S3 Standard-IA",
      "S3 Intelligent-Tiering",
      "S3 One Zone-IA"
    ],
    correctAnswer: 2,
    explanation: "S3 Intelligent-Tiering automatically moves objects between frequent and infrequent access tiers based on access patterns, with no retrieval fees. Other classes require manual lifecycle policies to change tiers.",
    difficulty: "easy",
    references: ["https://aws.amazon.com/s3/storage-classes/intelligent-tiering/"]
  }
];

// Helper function to get questions by domain
export function getQuestionsByDomain(domain: string): QuizQuestion[] {
  return quizQuestions.filter(q => q.domain === domain);
}

// Helper function to get questions by week
export function getQuestionsByWeek(week: number): QuizQuestion[] {
  return quizQuestions.filter(q => q.week === week);
}

// Helper function to get questions by difficulty
export function getQuestionsByDifficulty(difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion[] {
  return quizQuestions.filter(q => q.difficulty === difficulty);
}

// Get all unique domains
export const quizDomains = Array.from(new Set(quizQuestions.map(q => q.domain))).sort();
