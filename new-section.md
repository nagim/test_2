# Launching an Instance Using Manual Launch

If you are deploying Teradata components separately on AWS, you can use the Manual Launch option.

Before launching instances of other Teradata products, be sure to launch a Teradata Database instance using CloudFormation. You cannot use the Manual Launch option to deploy a Teradata Database instance.

1. From the AWS Marketplace, locate the AMI from which you want to launch the instance:

 - New users: In the **Search** box, type `Teradata`. - Returning users: Click **Your Software**, in the upper-right corner.
 A list of AMIs appears.

2. Select the preferred AMI:

 - New users: In the list of AMIs, click the link for the preferred option. - Returning users: Beside the preferred AMI, click **Launch more software**.
 A product summary page appears.

3. Review the product configuration options and pricing details, then click **Continue**.
4. Click **Manual**.
5. At **Select a Version**, select the AMI version from which to launch the instance.

 ![](wkp1467245067353.gif)

6. [Optional] To view cost information for running the instance in a region other than the default, select the region at **Pricing Details** under **For region**.

  For information on the implications of the region setting with Teradata software, see [Region and Time Zone Considerations](rza1468615796901.md).

7. At **Pricing Details** under **Hourly Fees**, note the name of the EC2 Instance Type that you want to use.

  You will need this name to begin configuring the instance later in this procedure.

 ![](fto1467245067696.gif)

8. Click **Launch with EC2 Console** beside the Region in which you want to run the instance.

 The EC2 Console opens to the **Step 2: Choose an Instance Type** page.

9. Click ![](wiz1467245068616.gif) beside the row listing the instance type you noted earlier, then click **Next: Configure Instance Details**.

 Launching instance types other than those that Teradata supports may result in the instance not launching. For more information, see [Supported Instance Types](ihq1473174158197.md).

 ![](hdq1467245069334.gif)

10. On the **Step 3: Configure Instance Details** page, change the default settings for the following parameters:

 |Parameter|Action|
|---------|------|
|Auto-assign Public IP|Select <b>Enable</b>.|
|Network|Select a different setting or click <b>Create new VPC</b> to run the instance in a network other than the default.<br/>​For more information, see <a href="dmc1467240781066.md">Virtual Private Cloud</a>.<br/>|

 ![](mlz1467245070301.gif)

11. [Optional] Change the default settings for other instance parameters as follows:

 |Setting|Action|
|-------|------|
|Number of Instances|Enter a value other than <i>1</i> to launch multiple instances from the same AMI.|
|Purchasing option|Select the check box to <b>Request Spot Instances</b>.|
|Subnet|Select a different setting or click the link to configure a new subnet to run the instance in an Availability Zone other than the default.<br/>​For more information, see <a href="rza1468615796901.md">Region and Time Zone Considerations</a>.<br/><br/>​Teradata Server Management instances (also known as CMIC instance) require use of the public and BYNET subnets created by the Teradata Database.<br/>|
|Placement group|Select a setting other than <b>No Placement Group</b> to enable the instance to participate in a low-latency, 10 Gbps network.<br/>​For more information, see <a href="kif1472571515710.md">Placement Groups</a>.<br/><br/>​<b>Note:</b> Placement group appears when you request spot instances.<br/>|
|IAM role|Select a different setting or click the link to configure a new IAM role.|
|Shutdown behavior|Select a setting other than <i>Stop</i>.<br/>​<b>Note:</b> The Shutdown behavior option is not displayed, if you selected <b>Request Spot Instances</b>.<br/>|
|Enable termination protection|Select the <b>Protect against accidental termination</b> check box.|
|Monitoring|Select the <b>Enable CloudWatch detailed monitoring</b> check box.|
|Tenancy|Select a setting other than 

12. Click **Next: Add Storage**.
13. [Optional] To set storage volumes to delete on instance termination, select all check boxes in the **Delete on Termination** column.

 Unless you set volumes to delete on termination, all data remains and storage-related charges continue to accrue. You can also enable this setting after launching the instance. For more information, see [Setting EBS Storage for Deletion on Instance Termination](fod1467240783219.md).

 ![](pnl1467245072220.gif)

14. Click **Next: Tag Instance**.

15. At **Value**, type a name for the instance.

 Naming the instance helps you identify it in the EC2 Management Console.

 ![](ics1467245073312.gif)

16. Click **Next: Configure Security Group**.

17. On the **Step 6: Configure Security Group** page, do one of the following:

 |Action|Steps|
|------|-----|
|Configure a new security group|<ol><li>​Select <b>Create a new security group</b>.</li><li>​Enter a <b>Security Group Name</b>.</li><li>​[Optional] Enter a <b>Description</b>.</li><li>​Configure the SSH rule, and click <b>Add Rule</b> to configure additional rules as required.<br/>​For more information, see <a href="xed1468615767199.md">Security Groups and Ports</a>.<br/></li></ol>|
|Choose an existing security group|<ol><li>​Select <b>Select an existing security group</b>.</li><li>​Click <img src="wiz1467245068616.gif" alt="" /> beside the row listing the preferred security group.</li></ol>|

18. Click **Review and Launch**.
19. Review the instance configuration summary information for accuracy, and click the applicable **Edit** link if you want to change settings before launching the instance.
20. Click **Launch**.

 The time required for an instance to launch varies because instance types come in various sizes with varying combinations of CPU, memory, storage, and networking capacity.

21. In the **Select an existing key pair or create a key pair** window, do one of the following, then click **Launch Instances**.

 |Action|Steps|
|------|-----|
|Select an existing key pair|<ol><li>​Select <b>Choose an existing key pair</b>.</li><li>​At <b>Select a key pair</b>, choose the preferred key pair.</li><li>​Click the acknowledgment.</li></ol>|
|Create a key pair|<ol><li>​Select <b>Create a new key pair</b>.</li><li>​Enter a <b>Key pair name</b>.</li><li>​Enter a <b>Download key pair</b>.</li><li>​Save the key pair file to the preferred location.</li></ol>|

 For more information, see [Key Pairs](icn1468615736183.md).

22. Click ![](wiz1467245068616.gif) to acknowledge that you have access to the private key pair file, then click **Launch**.

23. View your instances in the EC2 Management Console, and monitor the status of the instance launch.
 - Spot Instances: If you requested spot instances, click **View Spot Instances**. - Instances: Click **View Instances**.

When the Instance State changes to *running*, complete the applicable procedure under [Configuring Teradata Software for AWS](ydh1467240783484.md).
