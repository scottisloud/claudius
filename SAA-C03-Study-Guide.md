# 8-Week SAA-C03 Study Guide: From 56% to Passing

Your path from a 56% practice score to the 72% passing threshold requires strategic focus on your weakest domains—Analytics, Migration, and Database services—while maintaining your strong networking and compute foundation. This guide delivers **6 hours per week** across 2-3 sessions, prioritizing reading first, then videos, and concluding with hands-on labs.

**Your target exam date**: Mid-to-late December 2025 positions you perfectly for this 8-week timeline starting now.

-----

## Week 1: Analytics foundations and core services

**Focus**: Amazon Athena, AWS Glue, and Amazon Kinesis (your highest-priority gap at 0%)

### Session 1 (3 hours): Reading-first deep dive

**Primary reading materials:**

- AWS Athena FAQ at aws.amazon.com/athena/faqs — Focus on pricing model ($5/TB scanned), supported formats, and Glue Data Catalog integration
- AWS Glue FAQ at aws.amazon.com/glue/faqs — Master crawlers, Data Catalog, and serverless ETL concepts
- AWS Analytics Decision Guide at docs.aws.amazon.com/decision-guides/latest/analytics-on-aws-how-to-choose — Critical for understanding when to use each service

**Video supplement (remaining time):**

- Stephane Maarek's Analytics section in "Ultimate AWS Certified Solutions Architect Associate SAA-C03" on Udemy — Approximately 90 minutes covering Athena, EMR, and analytics comparison

### Session 2 (2-3 hours): Kinesis deep dive with hands-on

**Reading (45 minutes):**

- Amazon Kinesis Data Streams FAQ — Note the **1 MB/sec write** and **2 MB/sec read** per shard limits
- Kinesis Data Firehose FAQ — Understand automatic delivery to S3, Redshift, and OpenSearch

**Video (45 minutes):**

- Pluralsight "Storage, Databases, ML, and Big Data Analytics" course  (Andru Estes)  — Kinesis modules specifically

**Hands-on lab (60-90 minutes):**

- AWS Skillbuilder "Data Analytics Fundamentals" free course at explore.skillbuilder.aws — No AWS account charges required
- Optional: Create a simple Kinesis Data Stream using AWS Free Tier

### Session 3 (optional 1-2 hours): Practice and verification

- Tutorials Dojo free sampler at portal.tutorialsdojo.com — Filter for Analytics questions
- Review Tutorials Dojo AWS Cheat Sheet for Analytics services

**Weekly checkpoint**: Can you explain when to use Athena vs EMR vs Redshift? Can you describe the three Kinesis services (Streams, Firehose, Analytics) and their use cases?

-----

## Week 2: Advanced Analytics and data lake architecture

**Focus**: Amazon Redshift, QuickSight, Lake Formation, and EMR

### Session 1 (3 hours): Data warehousing and visualization

**Primary reading:**

- Amazon Redshift FAQ at aws.amazon.com/redshift/faqs — Focus on columnar storage, Redshift Spectrum (querying S3), and serverless option
- Amazon QuickSight FAQ at aws.amazon.com/quicksight/faqs — SPICE in-memory engine and data source integrations
- AWS Lake Formation FAQ at aws.amazon.com/lake-formation/faqs — Centralized permissions with LF-Tags

**Video supplement:**

- Neal Davis course database and analytics section on Udemy — Approximately 60-90 minutes on data warehousing concepts

### Session 2 (2-3 hours): EMR and integration patterns

**Reading (60 minutes):**

- Amazon EMR FAQ at aws.amazon.com/emr/faqs — Understand Hadoop/Spark workloads and EMR Serverless
- AWS Analytics whitepaper at docs.aws.amazon.com/whitepapers/latest/aws-overview/analytics.html

**Video (60 minutes):**

- Continue Pluralsight SAA-C03 Big Data Analytics module

**Hands-on (60 minutes):**

- AWS Skillbuilder "Data Analytics Learning Plan" at explore.skillbuilder.aws/learn/public/learning_plan/view/97/data-analytics-learning-plan — Complete the Athena and Glue modules

### Session 3 (1-2 hours): Integration and practice

- Practice building a mental decision tree:
  - **Ad-hoc SQL queries on S3** → Athena
  - **Schema discovery and ETL** → Glue
  - **Real-time streaming** → Kinesis
  - **Big data processing (Hadoop/Spark)** → EMR
  - **BI dashboards** → QuickSight
  - **Data lake governance** → Lake Formation
  - **Data warehousing** → Redshift

**Weekly goal**: Score 60%+ on Analytics-specific practice questions

-----

## Week 3: Migration and transfer services

**Focus**: DMS, Application Migration Service, Snow Family (your second-weakest area at 33%)

### Session 1 (3 hours): Database and application migration

**Primary reading:**

- AWS DMS FAQ at aws.amazon.com/dms/faqs — Understand homogeneous vs heterogeneous migrations and Schema Conversion Tool (SCT)
- AWS Prescriptive Guidance Migration Strategies at docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html — Master the **7 Rs**: Retire, Retain, Relocate, Rehost, Repurchase, Replatform, Refactor
- AWS Application Migration Service FAQ — Understand lift-and-shift with AWS MGN (formerly CloudEndure)

**Video (60 minutes):**

- Stephane Maarek "Disaster Recovery & Migrations" section — Covers DMS, AWS Backup, and migration tools

### Session 2 (2-3 hours): Data transfer services comparison

**Critical comparison study (this appears frequently on exams):**

|Service            |Primary Use Case                    |Key Differentiator                            |
|-------------------|------------------------------------|----------------------------------------------|
|**DataSync**       |One-time or scheduled data migration|10x faster than open-source tools, agent-based|
|**Storage Gateway**|Ongoing hybrid cloud storage        |Local caching, four types (File, Volume, Tape)|
|**Transfer Family**|SFTP/FTPS/FTP to S3                 |Protocol compatibility for existing workflows |
|**Snow Family**    |Offline/bandwidth-limited transfers |Physical devices for large-scale migration    |

**Reading:**

- AWS Decision Guide at docs.aws.amazon.com/decision-guides/latest/migration-on-aws-how-to-choose
- Tutorials Dojo comparison: tutorialsdojo.com/aws-datasync-vs-storage-gateway

**Video:**

- Pluralsight migration modules (approximately 25 minutes in the SAA-C03 path)

### Session 3 (1-2 hours): Snow Family and practice

**Reading:**

- Snow Family selection criteria:
  - **Snowcone** (8-14 TB): Edge computing, IoT, small transfers
  - **Snowball Edge Storage** (80 TB): Large migrations
  - **Snowball Edge Compute** (42 TB + vCPUs): Edge computing + transfer
  - **Snowmobile** (100 PB): Exabyte-scale datacenter moves

**Practice:**

- Tutorials Dojo migration-focused questions

**Weekly checkpoint**: Given a scenario, can you select between DMS, MGN, DataSync, Storage Gateway, and Snow Family?

-----

## Week 4: Database services deep dive

**Focus**: RDS, Aurora, DynamoDB decision frameworks (44% current score)

### Session 1 (3 hours): Relational database mastery

**Critical reading (exam-heavy topics):**

- Multi-AZ vs Read Replicas at aws.amazon.com/rds/features/multi-az and aws.amazon.com/rds/features/read-replicas

**Master this comparison:**

|Feature          |Multi-AZ         |Read Replicas        |
|-----------------|-----------------|---------------------|
|**Purpose**      |High availability|Read scalability     |
|**Replication**  |Synchronous      |Asynchronous         |
|**Serves reads?**|No (standby only)|Yes                  |
|**Auto failover**|Yes              |No (manual promotion)|
|**Cross-Region** |No               |Yes                  |

- Aurora High Availability whitepaper at docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html — 6 copies across 3 AZs, up to 15 read replicas

**Video:**

- Stephane Maarek RDS and Aurora sections (approximately 90 minutes)

### Session 2 (2-3 hours): NoSQL and caching

**Reading:**

- DynamoDB Best Practices at docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html — Partition key design is critical
- AWS NoSQL Database Decision Guide  at docs.aws.amazon.com/whitepapers/latest/choosing-an-aws-nosql-database

**ElastiCache comparison (memorize this):**

|Need              |Choose Redis|Choose Memcached|
|------------------|------------|----------------|
|Persistence/backup|✓           |✗               |
|Replication/HA    |✓           |✗               |
|Complex data types|✓           |✗               |
|Multi-threaded    |✗           |✓               |

**Hands-on:**

- AWS Skillbuilder "Introduction to Amazon DynamoDB" lab
- Create a DynamoDB table in Free Tier (always free: 25 GB storage,  25 WCU/RCU)

### Session 3 (1-2 hours): Purpose-built databases and practice

**Quick reference for specialty databases:**

- **DocumentDB**: MongoDB-compatible document database
- **Neptune**: Graph database for relationship queries
- **QLDB**: Immutable ledger for audit trails
- **Keyspaces**: Cassandra-compatible wide-column
- **Timestream**: Time-series data
- **MemoryDB for Redis**: Durable in-memory database

**Weekly goal**: Achieve 70%+ on database practice questions

-----

## Week 5: Application integration and decoupling patterns

**Focus**: SQS, SNS, EventBridge, Step Functions, API Gateway

### Session 1 (3 hours): Messaging services comparison

**Essential reading:**

- AWS Official Decision Guide at docs.aws.amazon.com/decision-guides/latest/sns-or-sqs-or-eventbridge — This is the definitive resource

**Memorize this comparison:**

|Feature        |SQS                  |SNS                   |EventBridge                    |
|---------------|---------------------|----------------------|-------------------------------|
|**Model**      |Pull (polling)       |Push (pub/sub)        |Event-driven (rules)           |
|**Persistence**|Yes                  |No                    |No                             |
|**Use case**   |Decoupling, buffering|Fan-out, notifications|Event routing, SaaS integration|

**Key patterns:**

- **SQS Standard** vs **FIFO**: FIFO guarantees ordering and exactly-once processing (300 msg/sec, 3000 with batching)
- **Fan-out pattern**: SNS topic → Multiple SQS queues
- **Amazon MQ**: Use only for migrating existing ActiveMQ/RabbitMQ workloads

**Video:**

- Pluralsight "Scaling and Decoupling Architectures" module

### Session 2 (2-3 hours): Orchestration and API management

**Reading:**

- Step Functions Developer Guide — Standard workflows (long-running) vs Express workflows (high-volume, short-duration)
- API Gateway documentation — REST, HTTP, and WebSocket APIs

**Video:**

- Stephane Maarek AWS Messaging section

**Hands-on:**

- Create an SQS queue and SNS topic in Free Tier
- AWS Skillbuilder messaging labs

### Session 3 (1-2 hours): Practice integration scenarios

Common exam patterns:

- "Decouple application components" → SQS
- "Notify multiple systems" → SNS with fan-out
- "Route events based on content" → EventBridge
- "Migrate existing message broker" → Amazon MQ
- "Orchestrate multiple Lambda functions" → Step Functions

**Weekly checkpoint**: Design a decoupled architecture using appropriate messaging services

-----

## Week 6: Cost optimization across all domains

**Focus**: Well-Architected Cost Pillar, pricing models, storage tiering (20% of exam)

### Session 1 (3 hours): Compute and reservation cost optimization

**Critical reading:**

- Well-Architected Cost Optimization Pillar at docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar
- Savings Plans vs Reserved Instances at docs.aws.amazon.com/savingsplans/latest/userguide/sp-ris.html — **AWS recommends Savings Plans** for flexibility (up to 72% savings)

**Pricing model comparison:**

|Model             |Discount |Commitment               |Best For                |
|------------------|---------|-------------------------|------------------------|
|On-Demand         |0%       |None                     |Unpredictable workloads |
|Savings Plans     |Up to 72%|$/hour for 1-3 years     |Most flexible savings   |
|Reserved Instances|Up to 72%|Specific instance        |Steady-state workloads  |
|Spot Instances    |Up to 90%|None (can be interrupted)|Fault-tolerant, flexible|

**Video:**

- Stephane Maarek cost optimization sections

### Session 2 (2-3 hours): Storage and data transfer optimization

**S3 Storage Classes (memorize transition order):**
Standard → Standard-IA → One Zone-IA → Intelligent-Tiering → Glacier Instant → Glacier Flexible → Glacier Deep Archive

**Reading:**

- S3 Intelligent-Tiering at aws.amazon.com/s3/storage-classes/intelligent-tiering — Automatic tier movement
- Spot Instance best practices  at docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-best-practices.html

**Hands-on:**

- Explore AWS Cost Explorer in your Free Tier account
- Create an S3 lifecycle policy

### Session 3 (1-2 hours): Cost tools and practice

**AWS cost management tools:**

- **Cost Explorer**: Visualize and analyze spending
- **AWS Budgets**: Set spending alerts
- **Trusted Advisor**: Cost optimization checks  (full access requires Business Support)
- **Compute Optimizer**: Right-sizing recommendations

**Weekly goal**: Understand cost optimization strategies for compute, storage, databases, and networking

-----

## Week 7: Cross-domain integration and intensive practice

**Focus**: Full practice exams, scenario-based questions, weak area review

### Session 1 (3 hours): First full practice exam

**Take a timed practice exam (130 minutes):**

- **Primary recommendation**: Tutorials Dojo Practice Exam Set 1 on Udemy (Jon Bonso) — Rated closest to actual exam difficulty
- URL: udemy.com/course/aws-certified-solutions-architect-associate-amazon-practice-exams-saa-c03

**Post-exam analysis (60 minutes):**

- Review every incorrect answer
- Identify patterns in mistakes by domain
- Note services you're unfamiliar with

### Session 2 (2-3 hours): Targeted weak area review

Based on practice exam results, review your weakest topics using:

- Tutorials Dojo Cheat Sheets at tutorialsdojo.com/aws-cheat-sheets — Comprehensive and exam-focused
- AWS FAQs for specific services you missed questions on
- Re-watch video segments for challenging topics

### Session 3 (2 hours): Second practice exam

- Take Stephane Maarek Practice Exam on Udemy
- **Target score**: 75-80% before scheduling real exam
- Continue reviewing incorrect answers with detailed explanations

**Weekly checkpoint**: Consistently scoring 75%+ across different practice exam providers

-----

## Week 8: Final review and exam preparation

**Focus**: Cheat sheet review, exam strategy, confidence building

### Session 1 (3 hours): Comprehensive review

**Quick reference review:**

- Tutorials Dojo AWS Cheat Sheets — Scan all major services
- Your personal notes from incorrect practice questions
- Service comparison tables from this guide

**High-yield topics to verify mastery:**

- VPC components (subnets, route tables, NACLs vs Security Groups)
- IAM policies, roles, and federation
- S3 encryption options (SSE-S3, SSE-KMS, SSE-C)
- RDS Multi-AZ vs Read Replicas
- Auto Scaling policies and CloudWatch alarms

### Session 2 (2-3 hours): Final practice exam and review

- Take one more full practice exam (Tutorials Dojo or Neal Davis)
- **Target**: 80%+ consistently
- Focus remaining time on any services still causing confusion

### Session 3 (1-2 hours): Exam logistics and strategy

**Exam day preparation:**

- Schedule exam at Pearson VUE or online proctored
- **ESL accommodation**: Request extra 30 minutes if English is not your first language
- Review exam format: 65 questions, 130 minutes, 720/1000 passing score (approximately 72%)

**Question strategy:**

- Read questions carefully — keywords like "MOST secure," "MOST cost-effective," and "LEAST operational overhead" are critical
- Use **2 minutes per question** average
- Flag difficult questions and return later
- Eliminate obviously wrong answers first

**Night before:**

- Light review of cheat sheets only
- Get adequate rest
- Prepare identification documents

-----

## Resource quick reference by platform

### Udemy courses (purchase during sales for $14-20 each)

|Course                |Instructor                |Duration        |Primary Use             |
|----------------------|--------------------------|----------------|------------------------|
|Ultimate AWS SAA-C03  |Stephane Maarek           |27 hours        |Primary video course    |
|SAA-C03 Practice Exams|Stephane Maarek           |390 questions   |Practice testing        |
|SAA-C03 Course        |Neal Davis                |24 hours        |Alternative video course|
|SAA-C03 Practice Tests|Neal Davis                |6 tests (390 Qs)|Practice testing        |
|SAA-C03 Practice Exams|Jon Bonso (Tutorials Dojo)|6 tests (390 Qs)|**Closest to real exam**|

### Pluralsight SAA-C03 path

- URL: pluralsight.com/paths/aws-certified-solutions-architect-associate-saa-c03
- Total duration: ~50 hours
- Key course for your weak areas: "Storage, Databases, ML, and Big Data Analytics"  (8h 17m)

### AWS Skillbuilder (free courses available)

- Data Analytics Learning Plan
- Database Learning Plan
- Cost Optimization courses
- Official Practice Question Set (20 free questions)
- Builder Labs (subscription required for full access)

### Free resources

- Tutorials Dojo Cheat Sheets at tutorialsdojo.com/aws-cheat-sheets
- AWS FAQs for all services
- AWS Whitepapers (Well-Architected Framework)
- Tutorials Dojo Free Sampler (30 questions)

-----

## Progress tracking checklist

|Week|Domain Focus                             |Target Achievement               |Completed|
|----|-----------------------------------------|---------------------------------|---------|
|1   |Analytics (Athena, Glue, Kinesis)        |Explain use cases                |☐        |
|2   |Analytics (Redshift, EMR, Lake Formation)|60%+ on Analytics questions      |☐        |
|3   |Migration & Transfer                     |Select correct migration tool    |☐        |
|4   |Databases (RDS, Aurora, DynamoDB)        |70%+ on Database questions       |☐        |
|5   |Application Integration                  |Design decoupled architectures   |☐        |
|6   |Cost Optimization                        |Apply cost strategies            |☐        |
|7   |Full Practice Exams                      |75%+ on practice exams           |☐        |
|8   |Final Review                             |80%+ consistently, exam scheduled|☐        |

-----

## Your success path

Starting from 56%, you need a **16-point improvement** to reach the 72% passing threshold. Your strong networking (99%) and compute (97%) scores provide a solid foundation—focus your limited study time aggressively on Analytics, Migration, and Database services where you have the largest gaps.

The combination of Stephane Maarek or Neal Davis for comprehensive video content, Tutorials Dojo practice exams for realistic exam simulation, and AWS official documentation for depth creates a proven pathway to certification. With 6 hours weekly over 8 weeks (**48 total hours**), concentrated on your weak areas using the reading-first approach you prefer, you're well-positioned for a mid-December exam success.
