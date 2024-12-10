import React from "react";

function article_1() {
	return {
		date: "29 November 2024",
		title: "Cloud Computing: Transforming the Digital Landscape",
		description:
			"Discover how cloud computing is revolutionizing IT infrastructure, its benefits, challenges, and future trends.",
		keywords: [
			"Cloud Computing",
			"Digital Transformation",
			"Cloud Technology",
			"Tharindu",
			"Tharindu Nayanajith",
		],
		style: `
			.article-container {
				padding: 20px;
				line-height: 1.6;
			}
			.article-title {
				text-align: center;
				font-size: 2rem;
				font-weight: bold;
			}
			.article-section {
				margin-bottom: 20px;
			}
			.article-image {
				width: 100%;
				max-width: 600px;
				margin: 20px auto;
				display: block;
				border-radius: 10px;
			}
		`,
		body: (
			<React.Fragment>
				<div className="article-container">
					{/* <h1 className="article-title">
						Cloud Computing: Transforming the Digital Landscape
					</h1> */}
					<img
						src="https://www.ingenious.co.uk/wp-content/uploads/2023/08/What-is-Cloud-Computing.jpeg"
						alt="Cloud Computing"
						className="article-image"
					/>
					<div className="article-section">
						<p>
							Cloud computing has revolutionized the way
							businesses and individuals manage, store, and access
							data. By leveraging the internet, cloud computing
							eliminates the need for physical hardware, offering
							scalable, cost-effective, and highly flexible
							solutions.
						</p>
					</div>
					<div className="article-section">
						<h2>1. Key Benefits of Cloud Computing</h2>
						<p>
							<strong>Cost Savings:</strong> Pay-as-you-go models
							eliminate expensive on-premises infrastructure.
							<br />
							<strong>Scalability:</strong> Scale resources up or
							down based on demand, ideal for fluctuating
							workloads.
							<br />
							<strong>Accessibility:</strong> Collaborate anywhere
							with internet access.
						</p>
					</div>
					<div className="article-section">
						<h2>2. Types of Cloud Services</h2>
						<ul>
							<li>
								<strong>IaaS:</strong> Virtualized resources,
								e.g., AWS.
							</li>
							<li>
								<strong>PaaS:</strong> Platforms for application
								development, e.g., Heroku.
							</li>
							<li>
								<strong>SaaS:</strong> Subscription-based
								software, e.g., Dropbox.
							</li>
						</ul>
					</div>
					<div className="article-section">
						<h2>3. Challenges of Cloud Computing</h2>
						<p>
							Security, downtime risks, and compliance are some
							challenges businesses face with cloud adoption.
						</p>
					</div>
					<div className="article-section">
						<h2>4. The Future of Cloud Computing</h2>
						<p>
							Hybrid clouds, edge computing, and AI integration
							will shape the future of cloud computing.
						</p>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "29 November 2024",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		keywords: [
			"Artificial Intelligence in Healthcare",
			"AI in Healthcare",
			"Healthcare Technology",
			"Tharindu",
			"Tharindu Nayanajith",
		],
		style: `
			.article-container {
				padding: 20px;
				line-height: 1.6;
			}
			.article-title {
				text-align: center;
				font-size: 2rem;
				font-weight: bold;
			}
			.article-section {
				margin-bottom: 20px;
			}
			.article-image {
				width: 100%;
				max-width: 600px;
				margin: 20px auto;
				display: block;
				border-radius: 10px;
			}
		`,
		body: (
			<React.Fragment>
				<div className="article-container">
					{/* <h1 className="article-title">Artificial Intelligence in Healthcare</h1> */}
					<img
						src="https://imageio.forbes.com/blogs-images/bernardmarr/files/2018/07/AdobeStock_157266517-1200x640.jpeg?format=jpg&height=900&width=1600&fit=bounds"
						alt="AI in Healthcare"
						className="article-image"
					/>
					<div className="article-section">
						<p>
							Artificial Intelligence (AI) is revolutionizing the
							healthcare industry by enhancing patient care,
							improving diagnostic accuracy, and streamlining
							operations. By leveraging vast amounts of data and
							advanced algorithms, AI is paving the way for a more
							efficient and personalized healthcare system.
						</p>
					</div>
					<div className="article-section">
						<h2>1. Enhancing Diagnostics</h2>
						<p>
							AI improves diagnostics by analyzing medical imaging
							and pathology samples with remarkable precision. For
							instance, AI can identify tumors, fractures, and
							cancerous cells faster and more accurately than
							traditional methods.
						</p>
					</div>
					<div className="article-section">
						<h2>2. Personalized Treatment Plans</h2>
						<p>
							AI facilitates tailored treatment by analyzing
							genetic data and patient history. This is
							particularly beneficial in oncology and chronic
							disease management, where personalized approaches
							lead to better outcomes.
						</p>
					</div>
					<div className="article-section">
						<h2>3. Virtual Health Assistants</h2>
						<p>
							AI-powered virtual assistants enhance patient
							engagement by supporting telemedicine, answering
							queries, scheduling appointments, and monitoring
							health through wearable devices.
						</p>
					</div>
					<div className="article-section">
						<h2>4. Drug Discovery and Development</h2>
						<p>
							AI accelerates drug discovery by analyzing molecular
							data and repurposing existing drugs, significantly
							reducing time and cost. It played a crucial role
							during the COVID-19 pandemic in identifying
							potential treatments quickly.
						</p>
					</div>
					<div className="article-section">
						<h2>
							5. Operational Efficiency in Healthcare Facilities
						</h2>
						<p>
							AI optimizes healthcare operations by predicting
							patient admissions, allocating resources
							effectively, and automating administrative tasks
							such as billing and documentation.
						</p>
					</div>
					<div className="article-section">
						<h2>6. Early Detection of Epidemics</h2>
						<p>
							AI aids in tracking disease outbreaks by analyzing
							real-time data, social media trends, and patient
							records, allowing healthcare authorities to deploy
							resources more efficiently.
						</p>
					</div>
					<div className="article-section">
						<h2>Challenges and Ethical Considerations</h2>
						<p>
							Despite its potential, AI faces challenges such as
							ensuring data privacy, avoiding biases in
							algorithms, and integrating with existing systems.
							Ethical AI frameworks are crucial to address these
							concerns.
						</p>
					</div>
					<div className="article-section">
						<h2>Conclusion</h2>
						<p>
							AI is reshaping healthcare by making it more
							efficient, accessible, and patient-centric. As
							technology evolves, its integration into healthcare
							will continue to redefine the boundaries of what is
							possible, leading to a healthier future for all.
						</p>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
