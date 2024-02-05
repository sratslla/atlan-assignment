const data = [
	{
		id: 1,
		name: "Animal Vision AI",
		category: "Feature Extraction",
		description:
			"A state-of-the-art AI model for recognizing various animals in images.",
		provider: "VisionTech",
		codeSnippet: "const result = animalVisionAI.predict(image);",
		likes: 25,
		imageURL:
			"https://qph.cf2.quoracdn.net/main-qimg-8ecdcea2aefdb685f5d30b3ae68f8e31-lq",
	},
	{
		id: 2,
		name: "Sentiment Analysis Bot",
		category: "Depth Estimation",
		description:
			"An AI model that analyzes and predicts the sentiment of text data.",
		provider: "TextMind",
		codeSnippet: "const sentiment = sentimentAnalysisBot.predict(text);",
		likes: 15,
		imageURL:
			"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
	},
	{
		id: 3,
		name: "Fraud Detection Guardian",
		category: "Object Detection",
		description:
			"Protect your business from fraudulent activities with this advanced fraud detection model.",
		provider: "SecureAI",
		codeSnippet:
			"const isFraudulent = fraudDetectionGuardian.detect(transaction);",
		likes: 30,
		imageURL:
			"https://vectara.com/wp-content/uploads/2023/05/code-generation-image.jpg",
	},
	{
		id: 4,
		name: "Weather Forecast AI",
		category: "Token Classification",
		description:
			"Get accurate and real-time weather forecasts using this powerful AI model.",
		provider: "WeatherTech",
		codeSnippet: "const forecast = weatherForecastAI.predict(location);",
		likes: 40,
		imageURL:
			"https://imageio.forbes.com/specials-images/imageserve/63bdffc05989c30c33964a41/Artificial-Intelligence/960x0.png?format=png&width=960",
	},
	{
		id: 5,
		name: "Health Monitoring Assistant",
		category: "Translation",
		description:
			"Monitor and analyze health metrics to provide personalized health recommendations.",
		provider: "MediCareAI",
		codeSnippet:
			"const healthStatus = healthMonitoringAssistant.analyze(metrics);",
		likes: 18,
		imageURL:
			"https://s7d1.scene7.com/is/image/dmqualcommprod/on-device-generative-ai-with-sub-10-billion-parameter-models",
	},
	{
		id: 6,
		name: "Autonomous Drone Navigation",
		category: "Image Segmentation",
		description:
			"Enable drones to navigate autonomously using cutting-edge AI algorithms.",
		provider: "DroneAI",
		codeSnippet:
			"const navigationResult = autonomousDroneNavigation.navigate();",
		likes: 22,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 7,
		name: "Language Translation Wizard",
		category: "Image Classification",
		description:
			"Translate text seamlessly between multiple languages with this language translation model.",
		provider: "LingoTech",
		codeSnippet:
			"const translation = languageTranslationWizard.translate(text, sourceLanguage, targetLanguage);",
		likes: 36,
		imageURL:
			"https://www.bitsathy.ac.in/wp-content/uploads/ew-what-is-generative-ai-model-1.png",
	},
	{
		id: 8,
		name: "Stock Price Predictor",
		category: "Depth Estimation",
		description:
			"Predict stock prices and trends with high accuracy using this advanced financial AI model.",
		provider: "StockAI",
		codeSnippet:
			"const predictedPrices = stockPricePredictor.predict(stockData);",
		likes: 28,
		imageURL:
			"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
	},
	{
		id: 9,
		name: "Recommendation Engine",
		category: "Translation",
		description:
			"Deliver personalized recommendations to users based on their preferences and behavior.",
		provider: "RecommenderTech",
		codeSnippet:
			"const recommendations = recommendationEngine.generate(userPreferences);",
		likes: 32,
		imageURL:
			"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
	},
	{
		id: 10,
		name: "Facial Recognition System",
		category: "Text Classification",
		description:
			"Identify and authenticate individuals through facial features with high accuracy.",
		provider: "FaceID",
		codeSnippet:
			"const faceRecognitionResult = facialRecognitionSystem.recognize(faceImage);",
		likes: 45,
		imageURL:
			"https://qph.cf2.quoracdn.net/main-qimg-8ecdcea2aefdb685f5d30b3ae68f8e31-lq",
	},
	{
		id: 11,
		name: "Chatbot Assistant",
		category: "Summarization",
		description:
			"Enhance customer support with an intelligent chatbot capable of handling diverse queries.",
		provider: "ChatMind",
		codeSnippet:
			"const chatResponse = chatbotAssistant.respond(userQuery);",
		likes: 27,
		imageURL:
			"https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt9b3bcf98b4cd9012/64c9829c84ac5d42cf1b8f35/Untitled_design_-_2023-08-01T170921.666.png?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
	},
	{
		id: 12,
		name: "Autonomous Vehicle Controller",
		category: "Text-to-Image",
		description:
			"Control the movement and decision-making of autonomous vehicles using this AI model.",
		provider: "AutoDrive",
		codeSnippet:
			"const vehicleStatus = autonomousVehicleController.control(vehicleSensors);",
		likes: 38,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 13,
		name: "Speech Recognition Guru",
		category: "Translation",
		description:
			"Accurately transcribe spoken words and convert speech to text with this advanced model.",
		provider: "SpeechTech",
		codeSnippet:
			"const transcription = speechRecognitionGuru.transcribe(audioInput);",
		likes: 20,
		imageURL:
			"https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt9b3bcf98b4cd9012/64c9829c84ac5d42cf1b8f35/Untitled_design_-_2023-08-01T170921.666.png?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
	},
	{
		id: 14,
		name: "Virtual Personal Trainer",
		category: "Text Classification",
		description:
			"Receive personalized fitness guidance and workout recommendations from this virtual trainer.",
		provider: "FitTech",
		codeSnippet:
			"const workoutPlan = virtualPersonalTrainer.createWorkout(userFitnessLevel);",
		likes: 42,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 15,
		name: "Cybersecurity Sentinel",
		category: "Token Classification",
		description:
			"Guard against cyber threats with this AI model that detects and prevents security breaches.",
		provider: "SecureNet",
		codeSnippet:
			"const threatDetected = cybersecuritySentinel.detectThreat(networkTraffic);",
		likes: 33,
		imageURL:
			"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
	},
	{
		id: 16,
		name: "Social Media Analyzer",
		category: "Image Classification",
		description:
			"Analyze social media trends and user sentiments to make data-driven marketing decisions.",
		provider: "SocialMind",
		codeSnippet:
			"const insights = socialMediaAnalyzer.analyzeTrends(socialData);",
		likes: 24,
		imageURL:
			"https://qph.cf2.quoracdn.net/main-qimg-8ecdcea2aefdb685f5d30b3ae68f8e31-lq",
	},
	{
		id: 17,
		name: "Language Generation Maestro",
		category: "Image Segmentation",
		description:
			"Generate human-like language and content with this advanced language generation model.",
		provider: "LingoGenius",
		codeSnippet:
			"const generatedText = languageGenerationMaestro.generate();",
		likes: 19,
		imageURL:
			"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
	},
	{
		id: 18,
		name: "Smart Home Automation",
		category: "Depth Estimation",
		description:
			"Automate your home with AI, allowing intelligent control of devices for increased efficiency.",
		provider: "HomeSmart",
		codeSnippet:
			"const automationResult = smartHomeAutomation.controlDevices(userPreferences);",
		likes: 29,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 19,
		name: "Medical Diagnosis Expert",
		category: "Depth Estimation",
		description:
			"Assist medical professionals in diagnosing various conditions with this AI-powered diagnostic tool.",
		provider: "MedDiagnose",
		codeSnippet:
			"const diagnosisResult = medicalDiagnosisExpert.diagnose(symptoms);",
		likes: 23,
		imageURL:
			"https://imageio.forbes.com/specials-images/imageserve/63bdffc05989c30c33964a41/Artificial-Intelligence/960x0.png?format=png&width=960",
	},
	{
		id: 20,
		name: "Customer Churn Predictor",
		category: "Depth Estimation",
		description:
			"Predict and reduce customer churn by identifying potential churn patterns using AI.",
		provider: "ChurnMaster",
		codeSnippet:
			"const churnPrediction = customerChurnPredictor.predict(customerData);",
		likes: 31,
		imageURL:
			"https://imageio.forbes.com/specials-images/imageserve/63bdffc05989c30c33964a41/Artificial-Intelligence/960x0.png?format=png&width=960",
	},
	{
		id: 21,
		name: "E-commerce Personal Shopper",
		category: "Image Classification",
		description:
			"Provide personalized shopping recommendations to users based on their preferences.",
		provider: "ShopSmart",
		codeSnippet:
			"const shoppingRecommendations = personalShopper.recommend(userPreferences);",
		likes: 26,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 22,
		name: "Image Style Transfer",
		category: "Depth Estimation",
		description:
			"Transform the style of images using this AI model for creative and artistic effects.",
		provider: "StyleVision",
		codeSnippet:
			"const stylizedImage = imageStyleTransfer.transferStyle(inputImage);",
		likes: 35,
		imageURL:
			"https://imageio.forbes.com/specials-images/imageserve/63bdffc05989c30c33964a41/Artificial-Intelligence/960x0.png?format=png&width=960",
	},
	{
		id: 23,
		name: "Traffic Flow Optimizer",
		category: "Image-to-Text",
		description:
			"Optimize traffic flow in urban areas using AI algorithms for efficient transportation.",
		provider: "TrafficOptimize",
		codeSnippet:
			"const optimizedFlow = trafficFlowOptimizer.optimize(trafficData);",
		likes: 37,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 24,
		name: "Personal Finance Advisor",
		category: "Image-to-Text",
		description:
			"Receive personalized financial advice and budgeting recommendations with this AI model.",
		provider: "FinanceWise",
		codeSnippet:
			"const financialAdvice = personalFinanceAdvisor.advise(userFinancialData);",
		likes: 22,
		imageURL:
			"https://imageio.forbes.com/specials-images/imageserve/63bdffc05989c30c33964a41/Artificial-Intelligence/960x0.png?format=png&width=960",
	},
	{
		id: 25,
		name: "Document Summarizer",
		category: "Object Detection",
		description:
			"Summarize lengthy documents automatically, extracting key information for quick review.",
		provider: "SummarizeTech",
		codeSnippet:
			"const summary = documentSummarizer.summarize(documentText);",
		likes: 28,
		imageURL:
			"https://imageio.forbes.com/specials-images/imageserve/63bdffc05989c30c33964a41/Artificial-Intelligence/960x0.png?format=png&width=960",
	},
	{
		id: 26,
		name: "AI Music Composer",
		category: "Image Segmentation",
		description:
			"Compose original music tracks using AI-generated melodies and harmonies.",
		provider: "MusicGenius",
		codeSnippet: "const composedMusic = aiMusicComposer.compose();",
		likes: 41,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 27,
		name: "Inventory Management Optimizer",
		category: "Feature Extraction",
		description:
			"Optimize inventory levels and streamline supply chain operations with this AI model.",
		provider: "SupplyChainOptimize",
		codeSnippet:
			"const optimizedInventory = inventoryManagementOptimizer.optimize(inventoryData);",
		likes: 34,
		imageURL:
			"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
	},
	{
		id: 28,
		name: "Virtual Travel Guide",
		category: "Summarization",
		description:
			"Explore new destinations with a virtual travel guide providing personalized recommendations.",
		provider: "TravelBuddy",
		codeSnippet:
			"const travelRecommendations = virtualTravelGuide.getRecommendations(userPreferences);",
		likes: 30,
		imageURL:
			"https://vectara.com/wp-content/uploads/2023/05/code-generation-image.jpg",
	},
	{
		id: 29,
		name: "Energy Consumption Analyzer",
		category: "Image Classification",
		description:
			"Analyze and optimize energy consumption in buildings for sustainable and efficient use.",
		provider: "EnergySaver",
		codeSnippet:
			"const energyAnalysis = energyConsumptionAnalyzer.analyze(buildingData);",
		likes: 25,
		imageURL:
			"https://vectara.com/wp-content/uploads/2023/05/code-generation-image.jpg",
	},
	{
		id: 30,
		name: "AI-powered Language Tutor",
		category: "Text-to-Image",
		description:
			"Enhance language learning with an AI tutor offering personalized lessons and assessments.",
		provider: "EduLingua",
		codeSnippet:
			"const languageLesson = aiLanguageTutor.provideLesson(userLanguageLevel);",
		likes: 39,
		imageURL:
			"https://www.bitsathy.ac.in/wp-content/uploads/ew-what-is-generative-ai-model-1.png",
	},
	{
		id: 31,
		name: "HR Recruitment Assistant",
		category: "Image-to-Text",
		description:
			"Streamline the recruitment process with an AI assistant that identifies suitable candidates.",
		provider: "HireSmart",
		codeSnippet:
			"const candidateMatch = hrRecruitmentAssistant.matchCandidates(jobRequirements);",
		likes: 27,
		imageURL:
			"https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt9b3bcf98b4cd9012/64c9829c84ac5d42cf1b8f35/Untitled_design_-_2023-08-01T170921.666.png?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
	},
	{
		id: 32,
		name: "Speech Emotion Analyzer",
		category: "Depth Estimation",
		description:
			"Recognize emotions in spoken words and analyze the emotional tone of speech.",
		provider: "EmoTech",
		codeSnippet:
			"const emotionAnalysis = speechEmotionAnalyzer.analyze(emotionalSpeech);",
		likes: 23,
		imageURL:
			"https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt9b3bcf98b4cd9012/64c9829c84ac5d42cf1b8f35/Untitled_design_-_2023-08-01T170921.666.png?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
	},
	{
		id: 33,
		name: "Precision Agriculture Advisor",
		category: "Object Detection",
		description:
			"Optimize farming practices by providing insights on crop health and environmental conditions.",
		provider: "AgriTech",
		codeSnippet:
			"const farmingRecommendations = precisionAgriAdvisor.provideRecommendations(fieldData);",
		likes: 35,
		imageURL:
			"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
	},
	{
		id: 34,
		name: "Video Game AI Opponent",
		category: "Text Classification",
		description:
			"Challenge yourself with an AI-powered opponent that adapts and learns during gameplay.",
		provider: "GameMaster",
		codeSnippet:
			"const gameResult = videoGameAIOpponent.playGame(playerMoves);",
		likes: 32,
		imageURL:
			"https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt9b3bcf98b4cd9012/64c9829c84ac5d42cf1b8f35/Untitled_design_-_2023-08-01T170921.666.png?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
	},
	{
		id: 35,
		name: "Legal Document Analyzer",
		category: "Feature Extraction",
		description:
			"Analyze legal documents and extract key information for efficient legal research.",
		provider: "LegalMind",
		codeSnippet:
			"const legalInsights = legalDocumentAnalyzer.analyze(documentText);",
		likes: 26,
		imageURL:
			"https://qph.cf2.quoracdn.net/main-qimg-8ecdcea2aefdb685f5d30b3ae68f8e31-lq",
	},
	{
		id: 36,
		name: "Fashion Style Recommender",
		category: "Image Classification",
		description:
			"Receive personalized fashion recommendations based on your style preferences and trends.",
		provider: "StyleSavvy",
		codeSnippet:
			"const fashionRecommendations = fashionStyleRecommender.recommend(userStyle);",
		likes: 28,
		imageURL:
			"https://s7d1.scene7.com/is/image/dmqualcommprod/on-device-generative-ai-with-sub-10-billion-parameter-models",
	},
	{
		id: 37,
		name: "Speech-to-Sign Language Interpreter",
		category: "Image-to-Image",
		description:
			"Translate spoken words into sign language gestures to enhance communication.",
		provider: "SignTech",
		codeSnippet:
			"const signLanguageOutput = speechToSignLanguageInterpreter.interpret(spokenWords);",
		likes: 20,
		imageURL:
			"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
	},
	{
		id: 38,
		name: "AI-driven Financial Analyst",
		category: "Token Classification",
		description:
			"Get financial insights and analysis with an AI-powered virtual financial analyst.",
		provider: "FinAnalyst",
		codeSnippet:
			"const financialInsights = aiFinancialAnalyst.analyze(financialData);",
		likes: 33,
		imageURL:
			"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
	},
	{
		id: 39,
		name: "Autonomous Surveillance Drone",
		category: "Depth Estimation",
		description:
			"Enhance security with a drone that autonomously monitors and responds to potential threats.",
		provider: "SecureDrone",
		codeSnippet:
			"const surveillanceResult = autonomousSurveillanceDrone.monitor(area);",
		likes: 29,
		imageURL:
			"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
	},
	{
		id: 40,
		name: "Virtual Interior Designer",
		category: "Image Segmentation",
		description:
			"Visualize and plan interior designs with the help of an AI-powered virtual designer.",
		provider: "InteriorVision",
		codeSnippet:
			"const designVisualization = virtualInteriorDesigner.visualize(space);",
		likes: 24,
		imageURL:
			"https://vectara.com/wp-content/uploads/2023/05/code-generation-image.jpg",
	},
	{
		id: 41,
		name: "Language Syntax Checker",
		category: "Translation",
		description:
			"Check and correct the syntax of written text using an advanced language syntax checker.",
		provider: "SyntaxCheck",
		codeSnippet:
			"const correctedText = languageSyntaxChecker.checkSyntax(text);",
		likes: 18,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 42,
		name: "AI-driven Customer Support",
		category: "Translation",
		description:
			"Improve customer support with an AI-powered system capable of resolving queries efficiently.",
		provider: "SupportGenius",
		codeSnippet:
			"const supportResponse = aiCustomerSupport.respond(userQuery);",
		likes: 37,
		imageURL:
			"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
	},
	{
		id: 43,
		name: "Real-time Language Translator",
		category: "Token Classification",
		description:
			"Translate spoken words in real-time across multiple languages with this advanced translator.",
		provider: "RealTranslate",
		codeSnippet:
			"const translatedSpeech = realTimeLanguageTranslator.translate(spokenWords);",
		likes: 25,
		imageURL:
			"https://qph.cf2.quoracdn.net/main-qimg-8ecdcea2aefdb685f5d30b3ae68f8e31-lq",
	},
	{
		id: 44,
		name: "AI-driven Content Moderator",
		category: "Feature Extraction",
		description:
			"Automatically moderate and filter content to maintain a safe online environment.",
		provider: "ModerationAI",
		codeSnippet:
			"const moderatedContent = aiContentModerator.moderate(content);",
		likes: 36,
		imageURL:
			"https://s7d1.scene7.com/is/image/dmqualcommprod/on-device-generative-ai-with-sub-10-billion-parameter-models",
	},
	{
		id: 45,
		name: "Smart Energy Grid Optimizer",
		category: "Token Classification",
		description:
			"Optimize the distribution of energy in smart grids for efficient and sustainable power usage.",
		provider: "GridOptimize",
		codeSnippet:
			"const optimizedGrid = smartEnergyGridOptimizer.optimize(gridData);",
		likes: 31,
		imageURL:
			"https://qph.cf2.quoracdn.net/main-qimg-8ecdcea2aefdb685f5d30b3ae68f8e31-lq",
	},
	{
		id: 46,
		name: "AI-driven Email Assistant",
		category: "Image Classification",
		description:
			"Enhance email management with an AI assistant capable of organizing and prioritizing messages.",
		provider: "EmailGenius",
		codeSnippet:
			"const organizedEmails = aiEmailAssistant.organize(emails);",
		likes: 22,
		imageURL:
			"https://s7d1.scene7.com/is/image/dmqualcommprod/on-device-generative-ai-with-sub-10-billion-parameter-models",
	},
	{
		id: 47,
		name: "Robotics Process Automation",
		category: "Feature Extraction",
		description:
			"Automate repetitive business processes with a robotics process automation AI model.",
		provider: "AutoBot",
		codeSnippet:
			"const automatedProcess = roboticsProcessAutomation.automate(processData);",
		likes: 28,
		imageURL:
			"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
	},
	{
		id: 48,
		name: "AI-driven Video Editor",
		category: "Image-to-Text",
		description:
			"Automatically edit and enhance videos with the help of an AI-powered video editing tool.",
		provider: "VideoGenius",
		codeSnippet: "const editedVideo = aiVideoEditor.edit(videoData);",
		likes: 40,
		imageURL:
			"https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt9b3bcf98b4cd9012/64c9829c84ac5d42cf1b8f35/Untitled_design_-_2023-08-01T170921.666.png?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
	},
	{
		id: 49,
		name: "AI-driven Fashion Stylist",
		category: "Image Classification",
		description:
			"Receive personalized fashion advice and style recommendations from an AI-driven stylist.",
		provider: "FashionistaAI",
		codeSnippet:
			"const styledOutfit = aiFashionStylist.recommend(userPreferences);",
		likes: 33,
		imageURL:
			"https://vectara.com/wp-content/uploads/2023/05/code-generation-image.jpg",
	},
	{
		id: 50,
		name: "Automated Code Reviewer",
		category: "Image Classification",
		description:
			"Improve code quality and identify potential issues with an automated code reviewer powered by AI.",
		provider: "CodeGenius",
		codeSnippet:
			"const codeReviewResult = automatedCodeReviewer.review(code);",
		likes: 26,
		imageURL:
			"https://www.bitsathy.ac.in/wp-content/uploads/ew-what-is-generative-ai-model-1.png",
	},
	{
		id: 51,
		name: "AI-driven Social Media Manager",
		category: "Summarization",
		description:
			"Optimize social media campaigns and content scheduling with an AI-powered social media manager.",
		provider: "SocialGenius",
		codeSnippet:
			"const socialMediaStrategy = aiSocialMediaManager.optimizeStrategy(campaignData);",
		likes: 29,
		imageURL:
			"https://imageio.forbes.com/specials-images/imageserve/63bdffc05989c30c33964a41/Artificial-Intelligence/960x0.png?format=png&width=960",
	},
	{
		id: 52,
		name: "Medical Image Analysis",
		category: "Depth Estimation",
		description:
			"Analyze medical images for diagnostic purposes, detecting abnormalities and assisting healthcare professionals.",
		provider: "MedImageAI",
		codeSnippet:
			"const analysisResult = medicalImageAnalysis.analyze(imageData);",
		likes: 38,
		imageURL:
			"https://s7d1.scene7.com/is/image/dmqualcommprod/on-device-generative-ai-with-sub-10-billion-parameter-models",
	},
	{
		id: 53,
		name: "AI-driven Home Security System",
		category: "Image-to-Text",
		description:
			"Enhance home security with an AI system that detects and responds to potential threats in real-time.",
		provider: "SecureHome",
		codeSnippet:
			"const securityStatus = aiHomeSecurity.detectThreats(sensorData);",
		likes: 35,
		imageURL:
			"https://s7d1.scene7.com/is/image/dmqualcommprod/on-device-generative-ai-with-sub-10-billion-parameter-models",
	},
	{
		id: 54,
		name: "Automated Data Cleansing Tool",
		category: "Text Classification",
		description:
			"Cleanse and standardize data automatically, ensuring data accuracy and consistency.",
		provider: "DataCleanse",
		codeSnippet:
			"const cleansedData = automatedDataCleansing.cleanse(data);",
		likes: 24,
		imageURL:
			"https://www.bitsathy.ac.in/wp-content/uploads/ew-what-is-generative-ai-model-1.png",
	},
	{
		id: 55,
		name: "AI-driven Event Planner",
		category: "Object Detection",
		description:
			"Plan and organize events efficiently with the assistance of an AI-driven event planning tool.",
		provider: "EventGenius",
		codeSnippet: "const eventPlan = aiEventPlanner.plan(eventDetails);",
		likes: 30,
		imageURL:
			"https://vectara.com/wp-content/uploads/2023/05/code-generation-image.jpg",
	},
	{
		id: 56,
		name: "Facial Emotion Recognition",
		category: "Image-to-Image",
		description:
			"Detect and analyze emotions based on facial expressions in images and videos.",
		provider: "EmoFace",
		codeSnippet:
			"const emotionResult = facialEmotionRecognition.detectEmotion(faceData);",
		likes: 27,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 57,
		name: "AI-driven Recipe Generator",
		category: "Image-to-Image",
		description:
			"Generate unique and personalized recipes based on dietary preferences and available ingredients.",
		provider: "RecipeGenius",
		codeSnippet:
			"const generatedRecipe = aiRecipeGenerator.generate(dietPreferences, availableIngredients);",
		likes: 42,
		imageURL:
			"https://s7d1.scene7.com/is/image/dmqualcommprod/on-device-generative-ai-with-sub-10-billion-parameter-models",
	},
	{
		id: 58,
		name: "Chat-based Language Learning",
		category: "Feature Extraction",
		description:
			"Learn new languages through interactive chat-based conversations with an AI language learning assistant.",
		provider: "LingoChat",
		codeSnippet:
			"const languageLesson = chatLanguageLearningAssistant.startLesson();",
		likes: 31,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 59,
		name: "AI-driven Legal Research Assistant",
		category: "Text Classification",
		description:
			"Assist legal professionals in conducting thorough legal research and analysis using AI capabilities.",
		provider: "LegalResearchGenius",
		codeSnippet:
			"const legalInsights = aiLegalResearchAssistant.research(query);",
		likes: 36,
		imageURL:
			"https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt9b3bcf98b4cd9012/64c9829c84ac5d42cf1b8f35/Untitled_design_-_2023-08-01T170921.666.png?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
	},
	{
		id: 60,
		name: "Voice-controlled Smart Assistant",
		category: "Image Segmentation",
		description:
			"Control your smart home devices through voice commands with this AI-powered voice-controlled assistant.",
		provider: "VoiceSmart",
		codeSnippet:
			"const deviceControl = voiceSmartAssistant.controlDevice(command);",
		likes: 25,
		imageURL:
			"https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt9b3bcf98b4cd9012/64c9829c84ac5d42cf1b8f35/Untitled_design_-_2023-08-01T170921.666.png?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
	},
	{
		id: 61,
		name: "AI-driven Video Game Designer",
		category: "Image-to-Image",
		description:
			"Automatically design levels, characters, and gameplay elements for video games using AI algorithms.",
		provider: "GameDesignGenius",
		codeSnippet: "const gameDesign = aiGameDesigner.designGame();",
		likes: 39,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 62,
		name: "AI-powered Cybersecurity Training",
		category: "Translation",
		description:
			"Enhance cybersecurity skills through AI-driven training programs and simulations.",
		provider: "CyberSecTrainer",
		codeSnippet:
			"const trainingModule = aiCybersecurityTraining.createModule();",
		likes: 28,
		imageURL:
			"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
	},
	{
		id: 63,
		name: "AI-driven Marketing Analyst",
		category: "Depth Estimation",
		description:
			"Analyze marketing data and trends to provide actionable insights for effective marketing strategies.",
		provider: "MarketingAnalystGenius",
		codeSnippet:
			"const marketingInsights = aiMarketingAnalyst.analyze(data);",
		likes: 34,
		imageURL:
			"https://s7d1.scene7.com/is/image/dmqualcommprod/on-device-generative-ai-with-sub-10-billion-parameter-models",
	},
	{
		id: 64,
		name: "AI-powered Virtual Receptionist",
		category: "Image-to-Image",
		description:
			"Enhance business communication with an AI-powered virtual receptionist capable of handling calls and messages.",
		provider: "ReceptionistGenius",
		codeSnippet:
			"const callHandling = aiVirtualReceptionist.handleCall(incomingCall);",
		likes: 26,
		imageURL:
			"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
	},
	{
		id: 65,
		name: "Animal Vision AI NEW",
		category: "Depth Estimation",
		description:
			"A state-of-the-art AI model for recognizing various animals in images.",
		provider: "VisionTech",
		codeSnippet: "const result = animalVisionAI.predict(image);",
		likes: 25,
		imageURL:
			"https://qph.cf2.quoracdn.net/main-qimg-8ecdcea2aefdb685f5d30b3ae68f8e31-lq",
	},
	{
		id: 66,
		name: "Sentiment Analysis Bot NEW",
		category: "Image Classification",
		description:
			"An AI model that analyzes and predicts the sentiment of text data.",
		provider: "TextMind",
		codeSnippet: "const sentiment = sentimentAnalysisBot.predict(text);",
		likes: 15,
		imageURL:
			"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
	},
	{
		id: 67,
		name: "Fraud Detection Guardian NEW",
		category: "Depth Estimation",
		description:
			"Protect your business from fraudulent activities with this advanced fraud detection model.",
		provider: "SecureAI",
		codeSnippet:
			"const isFraudulent = fraudDetectionGuardian.detect(transaction);",
		likes: 30,
		imageURL:
			"https://vectara.com/wp-content/uploads/2023/05/code-generation-image.jpg",
	},
	{
		id: 68,
		name: "Weather Forecast AI NEW",
		category: "Translation",
		description:
			"Get accurate and real-time weather forecasts using this powerful AI model.",
		provider: "WeatherTech",
		codeSnippet: "const forecast = weatherForecastAI.predict(location);",
		likes: 40,
		imageURL:
			"https://imageio.forbes.com/specials-images/imageserve/63bdffc05989c30c33964a41/Artificial-Intelligence/960x0.png?format=png&width=960",
	},
	{
		id: 69,
		name: "Health Monitoring Assistant NEW",
		category: "Text Classification",
		description:
			"Monitor and analyze health metrics to provide personalized health recommendations.",
		provider: "MediCareAI",
		codeSnippet:
			"const healthStatus = healthMonitoringAssistant.analyze(metrics);",
		likes: 18,
		imageURL:
			"https://s7d1.scene7.com/is/image/dmqualcommprod/on-device-generative-ai-with-sub-10-billion-parameter-models",
	},
	{
		id: 70,
		name: "Autonomous Drone Navigation NEW",
		category: "Token Classification",
		description:
			"Enable drones to navigate autonomously using cutting-edge AI algorithms.",
		provider: "DroneAI",
		codeSnippet:
			"const navigationResult = autonomousDroneNavigation.navigate();",
		likes: 22,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 71,
		name: "Language Translation Wizard NEW",
		category: "Feature Extraction",
		description:
			"Translate text seamlessly between multiple languages with this language translation model.",
		provider: "LingoTech",
		codeSnippet:
			"const translation = languageTranslationWizard.translate(text, sourceLanguage, targetLanguage);",
		likes: 36,
		imageURL:
			"https://www.bitsathy.ac.in/wp-content/uploads/ew-what-is-generative-ai-model-1.png",
	},
	{
		id: 72,
		name: "Stock Price Predictor NEW",
		category: "Image Segmentation",
		description:
			"Predict stock prices and trends with high accuracy using this advanced financial AI model.",
		provider: "StockAI",
		codeSnippet:
			"const predictedPrices = stockPricePredictor.predict(stockData);",
		likes: 28,
		imageURL:
			"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
	},
	{
		id: 73,
		name: "Recommendation Engine NEW",
		category: "Image Classification",
		description:
			"Deliver personalized recommendations to users based on their preferences and behavior.",
		provider: "RecommenderTech",
		codeSnippet:
			"const recommendations = recommendationEngine.generate(userPreferences);",
		likes: 32,
		imageURL:
			"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
	},
	{
		id: 74,
		name: "Facial Recognition System NEW",
		category: "Image Segmentation",
		description:
			"Identify and authenticate individuals through facial features with high accuracy.",
		provider: "FaceID",
		codeSnippet:
			"const faceRecognitionResult = facialRecognitionSystem.recognize(faceImage);",
		likes: 45,
		imageURL:
			"https://qph.cf2.quoracdn.net/main-qimg-8ecdcea2aefdb685f5d30b3ae68f8e31-lq",
	},
	{
		id: 75,
		name: "Chatbot Assistant NEW",
		category: "Depth Estimation",
		description:
			"Enhance customer support with an intelligent chatbot capable of handling diverse queries.",
		provider: "ChatMind",
		codeSnippet:
			"const chatResponse = chatbotAssistant.respond(userQuery);",
		likes: 27,
		imageURL:
			"https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt9b3bcf98b4cd9012/64c9829c84ac5d42cf1b8f35/Untitled_design_-_2023-08-01T170921.666.png?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
	},
	{
		id: 76,
		name: "Autonomous Vehicle Controller NEW",
		category: "Image Segmentation",
		description:
			"Control the movement and decision-making of autonomous vehicles using this AI model.",
		provider: "AutoDrive",
		codeSnippet:
			"const vehicleStatus = autonomousVehicleController.control(vehicleSensors);",
		likes: 38,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 77,
		name: "Speech Recognition Guru NEW",
		category: "Token Classification",
		description:
			"Accurately transcribe spoken words and convert speech to text with this advanced model.",
		provider: "SpeechTech",
		codeSnippet:
			"const transcription = speechRecognitionGuru.transcribe(audioInput);",
		likes: 20,
		imageURL:
			"https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt9b3bcf98b4cd9012/64c9829c84ac5d42cf1b8f35/Untitled_design_-_2023-08-01T170921.666.png?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
	},
	{
		id: 78,
		name: "Virtual Personal Trainer NEW",
		category: "Translation",
		description:
			"Receive personalized fitness guidance and workout recommendations from this virtual trainer.",
		provider: "FitTech",
		codeSnippet:
			"const workoutPlan = virtualPersonalTrainer.createWorkout(userFitnessLevel);",
		likes: 42,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 79,
		name: "Cybersecurity Sentinel NEW",
		category: "Translation",
		description:
			"Guard against cyber threats with this AI model that detects and prevents security breaches.",
		provider: "SecureNet",
		codeSnippet:
			"const threatDetected = cybersecuritySentinel.detectThreat(networkTraffic);",
		likes: 33,
		imageURL:
			"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
	},
	{
		id: 80,
		name: "Social Media Analyzer NEW",
		category: "Depth Estimation",
		description:
			"Analyze social media trends and user sentiments to make data-driven marketing decisions.",
		provider: "SocialMind",
		codeSnippet:
			"const insights = socialMediaAnalyzer.analyzeTrends(socialData);",
		likes: 24,
		imageURL:
			"https://qph.cf2.quoracdn.net/main-qimg-8ecdcea2aefdb685f5d30b3ae68f8e31-lq",
	},
	{
		id: 81,
		name: "Language Generation Maestro NEW",
		category: "Image-to-Image",
		description:
			"Generate human-like language and content with this advanced language generation model.",
		provider: "LingoGenius",
		codeSnippet:
			"const generatedText = languageGenerationMaestro.generate();",
		likes: 19,
		imageURL:
			"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
	},
	{
		id: 82,
		name: "Smart Home Automation NEW",
		category: "Text-to-Image",
		description:
			"Automate your home with AI, allowing intelligent control of devices for increased efficiency.",
		provider: "HomeSmart",
		codeSnippet:
			"const automationResult = smartHomeAutomation.controlDevices(userPreferences);",
		likes: 29,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 83,
		name: "Medical Diagnosis Expert NEW",
		category: "Feature Extraction",
		description:
			"Assist medical professionals in diagnosing various conditions with this AI-powered diagnostic tool.",
		provider: "MedDiagnose",
		codeSnippet:
			"const diagnosisResult = medicalDiagnosisExpert.diagnose(symptoms);",
		likes: 23,
		imageURL:
			"https://imageio.forbes.com/specials-images/imageserve/63bdffc05989c30c33964a41/Artificial-Intelligence/960x0.png?format=png&width=960",
	},
	{
		id: 84,
		name: "Customer Churn Predictor NEW",
		category: "Summarization",
		description:
			"Predict and reduce customer churn by identifying potential churn patterns using AI.",
		provider: "ChurnMaster",
		codeSnippet:
			"const churnPrediction = customerChurnPredictor.predict(customerData);",
		likes: 31,
		imageURL:
			"https://imageio.forbes.com/specials-images/imageserve/63bdffc05989c30c33964a41/Artificial-Intelligence/960x0.png?format=png&width=960",
	},
	{
		id: 85,
		name: "E-commerce Personal Shopper NEW",
		category: "Feature Extraction",
		description:
			"Provide personalized shopping recommendations to users based on their preferences.",
		provider: "ShopSmart",
		codeSnippet:
			"const shoppingRecommendations = personalShopper.recommend(userPreferences);",
		likes: 26,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 86,
		name: "Image Style Transfer NEW",
		category: "Depth Estimation",
		description:
			"Transform the style of images using this AI model for creative and artistic effects.",
		provider: "StyleVision",
		codeSnippet:
			"const stylizedImage = imageStyleTransfer.transferStyle(inputImage);",
		likes: 35,
		imageURL:
			"https://imageio.forbes.com/specials-images/imageserve/63bdffc05989c30c33964a41/Artificial-Intelligence/960x0.png?format=png&width=960",
	},
	{
		id: 87,
		name: "Traffic Flow Optimizer NEW",
		category: "Feature Extraction",
		description:
			"Optimize traffic flow in urban areas using AI algorithms for efficient transportation.",
		provider: "TrafficOptimize",
		codeSnippet:
			"const optimizedFlow = trafficFlowOptimizer.optimize(trafficData);",
		likes: 37,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 88,
		name: "Personal Finance Advisor NEW",
		category: "Text-to-Image",
		description:
			"Receive personalized financial advice and budgeting recommendations with this AI model.",
		provider: "FinanceWise",
		codeSnippet:
			"const financialAdvice = personalFinanceAdvisor.advise(userFinancialData);",
		likes: 22,
		imageURL:
			"https://imageio.forbes.com/specials-images/imageserve/63bdffc05989c30c33964a41/Artificial-Intelligence/960x0.png?format=png&width=960",
	},
	{
		id: 89,
		name: "Document Summarizer NEW",
		category: "Image-to-Text",
		description:
			"Summarize lengthy documents automatically, extracting key information for quick review.",
		provider: "SummarizeTech",
		codeSnippet:
			"const summary = documentSummarizer.summarize(documentText);",
		likes: 28,
		imageURL:
			"https://imageio.forbes.com/specials-images/imageserve/63bdffc05989c30c33964a41/Artificial-Intelligence/960x0.png?format=png&width=960",
	},
	{
		id: 90,
		name: "AI Music Composer NEW",
		category: "Image Classification",
		description:
			"Compose original music tracks using AI-generated melodies and harmonies.",
		provider: "MusicGenius",
		codeSnippet: "const composedMusic = aiMusicComposer.compose();",
		likes: 41,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 91,
		name: "Inventory Management Optimizer NEW",
		category: "Token Classification",
		description:
			"Optimize inventory levels and streamline supply chain operations with this AI model.",
		provider: "SupplyChainOptimize",
		codeSnippet:
			"const optimizedInventory = inventoryManagementOptimizer.optimize(inventoryData);",
		likes: 34,
		imageURL:
			"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
	},
	{
		id: 92,
		name: "Virtual Travel Guide NEW",
		category: "Feature Extraction",
		description:
			"Explore new destinations with a virtual travel guide providing personalized recommendations.",
		provider: "TravelBuddy",
		codeSnippet:
			"const travelRecommendations = virtualTravelGuide.getRecommendations(userPreferences);",
		likes: 30,
		imageURL:
			"https://vectara.com/wp-content/uploads/2023/05/code-generation-image.jpg",
	},
	{
		id: 93,
		name: "Energy Consumption Analyzer NEW",
		category: "Image-to-Image",
		description:
			"Analyze and optimize energy consumption in buildings for sustainable and efficient use.",
		provider: "EnergySaver",
		codeSnippet:
			"const energyAnalysis = energyConsumptionAnalyzer.analyze(buildingData);",
		likes: 25,
		imageURL:
			"https://vectara.com/wp-content/uploads/2023/05/code-generation-image.jpg",
	},
	{
		id: 94,
		name: "AI-powered Language Tutor NEW",
		category: "Image Classification",
		description:
			"Enhance language learning with an AI tutor offering personalized lessons and assessments.",
		provider: "EduLingua",
		codeSnippet:
			"const languageLesson = aiLanguageTutor.provideLesson(userLanguageLevel);",
		likes: 39,
		imageURL:
			"https://www.bitsathy.ac.in/wp-content/uploads/ew-what-is-generative-ai-model-1.png",
	},
	{
		id: 95,
		name: "HR Recruitment Assistant NEW",
		category: "Summarization",
		description:
			"Streamline the recruitment process with an AI assistant that identifies suitable candidates.",
		provider: "HireSmart",
		codeSnippet:
			"const candidateMatch = hrRecruitmentAssistant.matchCandidates(jobRequirements);",
		likes: 27,
		imageURL:
			"https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt9b3bcf98b4cd9012/64c9829c84ac5d42cf1b8f35/Untitled_design_-_2023-08-01T170921.666.png?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
	},
	{
		id: 96,
		name: "Speech Emotion Analyzer NEW",
		category: "Object Detection",
		description:
			"Recognize emotions in spoken words and analyze the emotional tone of speech.",
		provider: "EmoTech",
		codeSnippet:
			"const emotionAnalysis = speechEmotionAnalyzer.analyze(emotionalSpeech);",
		likes: 23,
		imageURL:
			"https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt9b3bcf98b4cd9012/64c9829c84ac5d42cf1b8f35/Untitled_design_-_2023-08-01T170921.666.png?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
	},
	{
		id: 97,
		name: "Precision Agriculture Advisor NEW",
		category: "Image-to-Image",
		description:
			"Optimize farming practices by providing insights on crop health and environmental conditions.",
		provider: "AgriTech",
		codeSnippet:
			"const farmingRecommendations = precisionAgriAdvisor.provideRecommendations(fieldData);",
		likes: 35,
		imageURL:
			"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
	},
	{
		id: 98,
		name: "Video Game AI Opponent NEW",
		category: "Text-to-Image",
		description:
			"Challenge yourself with an AI-powered opponent that adapts and learns during gameplay.",
		provider: "GameMaster",
		codeSnippet:
			"const gameResult = videoGameAIOpponent.playGame(playerMoves);",
		likes: 32,
		imageURL:
			"https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt9b3bcf98b4cd9012/64c9829c84ac5d42cf1b8f35/Untitled_design_-_2023-08-01T170921.666.png?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
	},
	{
		id: 99,
		name: "Legal Document Analyzer NEW",
		category: "Image-to-Image",
		description:
			"Analyze legal documents and extract key information for efficient legal research.",
		provider: "LegalMind",
		codeSnippet:
			"const legalInsights = legalDocumentAnalyzer.analyze(documentText);",
		likes: 26,
		imageURL:
			"https://qph.cf2.quoracdn.net/main-qimg-8ecdcea2aefdb685f5d30b3ae68f8e31-lq",
	},
	{
		id: 100,
		name: "Fashion Style Recommender NEW",
		category: "Image Classification",
		description:
			"Receive personalized fashion recommendations based on your style preferences and trends.",
		provider: "StyleSavvy",
		codeSnippet:
			"const fashionRecommendations = fashionStyleRecommender.recommend(userStyle);",
		likes: 28,
		imageURL:
			"https://s7d1.scene7.com/is/image/dmqualcommprod/on-device-generative-ai-with-sub-10-billion-parameter-models",
	},
	{
		id: 101,
		name: "Speech-to-Sign Language Interpreter NEW",
		category: "Feature Extraction",
		description:
			"Translate spoken words into sign language gestures to enhance communication.",
		provider: "SignTech",
		codeSnippet:
			"const signLanguageOutput = speechToSignLanguageInterpreter.interpret(spokenWords);",
		likes: 20,
		imageURL:
			"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
	},
	{
		id: 102,
		name: "AI-driven Financial Analyst NEW",
		category: "Translation",
		description:
			"Get financial insights and analysis with an AI-powered virtual financial analyst.",
		provider: "FinAnalyst",
		codeSnippet:
			"const financialInsights = aiFinancialAnalyst.analyze(financialData);",
		likes: 33,
		imageURL:
			"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
	},
	{
		id: 103,
		name: "Autonomous Surveillance Drone NEW",
		category: "Image-to-Image",
		description:
			"Enhance security with a drone that autonomously monitors and responds to potential threats.",
		provider: "SecureDrone",
		codeSnippet:
			"const surveillanceResult = autonomousSurveillanceDrone.monitor(area);",
		likes: 29,
		imageURL:
			"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
	},
	{
		id: 104,
		name: "Virtual Interior Designer NEW",
		category: "Image Segmentation",
		description:
			"Visualize and plan interior designs with the help of an AI-powered virtual designer.",
		provider: "InteriorVision",
		codeSnippet:
			"const designVisualization = virtualInteriorDesigner.visualize(space);",
		likes: 24,
		imageURL:
			"https://vectara.com/wp-content/uploads/2023/05/code-generation-image.jpg",
	},
	{
		id: 105,
		name: "Language Syntax Checker NEW",
		category: "Text-to-Image",
		description:
			"Check and correct the syntax of written text using an advanced language syntax checker.",
		provider: "SyntaxCheck",
		codeSnippet:
			"const correctedText = languageSyntaxChecker.checkSyntax(text);",
		likes: 18,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 106,
		name: "AI-driven Customer Support NEW",
		category: "Summarization",
		description:
			"Improve customer support with an AI-powered system capable of resolving queries efficiently.",
		provider: "SupportGenius",
		codeSnippet:
			"const supportResponse = aiCustomerSupport.respond(userQuery);",
		likes: 37,
		imageURL:
			"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
	},
	{
		id: 107,
		name: "Real-time Language Translator NEW",
		category: "Image-to-Image",
		description:
			"Translate spoken words in real-time across multiple languages with this advanced translator.",
		provider: "RealTranslate",
		codeSnippet:
			"const translatedSpeech = realTimeLanguageTranslator.translate(spokenWords);",
		likes: 25,
		imageURL:
			"https://qph.cf2.quoracdn.net/main-qimg-8ecdcea2aefdb685f5d30b3ae68f8e31-lq",
	},
	{
		id: 108,
		name: "AI-driven Content Moderator NEW",
		category: "Image Segmentation",
		description:
			"Automatically moderate and filter content to maintain a safe online environment.",
		provider: "ModerationAI",
		codeSnippet:
			"const moderatedContent = aiContentModerator.moderate(content);",
		likes: 36,
		imageURL:
			"https://s7d1.scene7.com/is/image/dmqualcommprod/on-device-generative-ai-with-sub-10-billion-parameter-models",
	},
	{
		id: 109,
		name: "Smart Energy Grid Optimizer NEW",
		category: "Text-to-Image",
		description:
			"Optimize the distribution of energy in smart grids for efficient and sustainable power usage.",
		provider: "GridOptimize",
		codeSnippet:
			"const optimizedGrid = smartEnergyGridOptimizer.optimize(gridData);",
		likes: 31,
		imageURL:
			"https://qph.cf2.quoracdn.net/main-qimg-8ecdcea2aefdb685f5d30b3ae68f8e31-lq",
	},
	{
		id: 110,
		name: "AI-driven Email Assistant NEW",
		category: "Image Segmentation",
		description:
			"Enhance email management with an AI assistant capable of organizing and prioritizing messages.",
		provider: "EmailGenius",
		codeSnippet:
			"const organizedEmails = aiEmailAssistant.organize(emails);",
		likes: 22,
		imageURL:
			"https://s7d1.scene7.com/is/image/dmqualcommprod/on-device-generative-ai-with-sub-10-billion-parameter-models",
	},
	{
		id: 111,
		name: "Robotics Process Automation NEW",
		category: "Depth Estimation",
		description:
			"Automate repetitive business processes with a robotics process automation AI model.",
		provider: "AutoBot",
		codeSnippet:
			"const automatedProcess = roboticsProcessAutomation.automate(processData);",
		likes: 28,
		imageURL:
			"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
	},
	{
		id: 112,
		name: "AI-driven Video Editor NEW",
		category: "Text-to-Image",
		description:
			"Automatically edit and enhance videos with the help of an AI-powered video editing tool.",
		provider: "VideoGenius",
		codeSnippet: "const editedVideo = aiVideoEditor.edit(videoData);",
		likes: 40,
		imageURL:
			"https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt9b3bcf98b4cd9012/64c9829c84ac5d42cf1b8f35/Untitled_design_-_2023-08-01T170921.666.png?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
	},
	{
		id: 113,
		name: "AI-driven Fashion Stylist NEW",
		category: "Summarization",
		description:
			"Receive personalized fashion advice and style recommendations from an AI-driven stylist.",
		provider: "FashionistaAI",
		codeSnippet:
			"const styledOutfit = aiFashionStylist.recommend(userPreferences);",
		likes: 33,
		imageURL:
			"https://vectara.com/wp-content/uploads/2023/05/code-generation-image.jpg",
	},
	{
		id: 114,
		name: "Automated Code Reviewer NEW",
		category: "Text Classification",
		description:
			"Improve code quality and identify potential issues with an automated code reviewer powered by AI.",
		provider: "CodeGenius",
		codeSnippet:
			"const codeReviewResult = automatedCodeReviewer.review(code);",
		likes: 26,
		imageURL:
			"https://www.bitsathy.ac.in/wp-content/uploads/ew-what-is-generative-ai-model-1.png",
	},
	{
		id: 115,
		name: "AI-driven Social Media Manager NEW",
		category: "Image Segmentation",
		description:
			"Optimize social media campaigns and content scheduling with an AI-powered social media manager.",
		provider: "SocialGenius",
		codeSnippet:
			"const socialMediaStrategy = aiSocialMediaManager.optimizeStrategy(campaignData);",
		likes: 29,
		imageURL:
			"https://imageio.forbes.com/specials-images/imageserve/63bdffc05989c30c33964a41/Artificial-Intelligence/960x0.png?format=png&width=960",
	},
	{
		id: 116,
		name: "Medical Image Analysis NEW",
		category: "Text-to-Image",
		description:
			"Analyze medical images for diagnostic purposes, detecting abnormalities and assisting healthcare professionals.",
		provider: "MedImageAI",
		codeSnippet:
			"const analysisResult = medicalImageAnalysis.analyze(imageData);",
		likes: 38,
		imageURL:
			"https://s7d1.scene7.com/is/image/dmqualcommprod/on-device-generative-ai-with-sub-10-billion-parameter-models",
	},
	{
		id: 117,
		name: "AI-driven Home Security System NEW",
		category: "Image-to-Text",
		description:
			"Enhance home security with an AI system that detects and responds to potential threats in real-time.",
		provider: "SecureHome",
		codeSnippet:
			"const securityStatus = aiHomeSecurity.detectThreats(sensorData);",
		likes: 35,
		imageURL:
			"https://s7d1.scene7.com/is/image/dmqualcommprod/on-device-generative-ai-with-sub-10-billion-parameter-models",
	},
	{
		id: 118,
		name: "Automated Data Cleansing Tool NEW",
		category: "Token Classification",
		description:
			"Cleanse and standardize data automatically, ensuring data accuracy and consistency.",
		provider: "DataCleanse",
		codeSnippet:
			"const cleansedData = automatedDataCleansing.cleanse(data);",
		likes: 24,
		imageURL:
			"https://www.bitsathy.ac.in/wp-content/uploads/ew-what-is-generative-ai-model-1.png",
	},
	{
		id: 119,
		name: "AI-driven Event Planner NEW",
		category: "Image-to-Text",
		description:
			"Plan and organize events efficiently with the assistance of an AI-driven event planning tool.",
		provider: "EventGenius",
		codeSnippet: "const eventPlan = aiEventPlanner.plan(eventDetails);",
		likes: 30,
		imageURL:
			"https://vectara.com/wp-content/uploads/2023/05/code-generation-image.jpg",
	},
	{
		id: 120,
		name: "Facial Emotion Recognition NEW",
		category: "Text Classification",
		description:
			"Detect and analyze emotions based on facial expressions in images and videos.",
		provider: "EmoFace",
		codeSnippet:
			"const emotionResult = facialEmotionRecognition.detectEmotion(faceData);",
		likes: 27,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 121,
		name: "AI-driven Recipe Generator NEW",
		category: "Text Classification",
		description:
			"Generate unique and personalized recipes based on dietary preferences and available ingredients.",
		provider: "RecipeGenius",
		codeSnippet:
			"const generatedRecipe = aiRecipeGenerator.generate(dietPreferences, availableIngredients);",
		likes: 42,
		imageURL:
			"https://s7d1.scene7.com/is/image/dmqualcommprod/on-device-generative-ai-with-sub-10-billion-parameter-models",
	},
	{
		id: 122,
		name: "Chat-based Language Learning NEW",
		category: "Image Segmentation",
		description:
			"Learn new languages through interactive chat-based conversations with an AI language learning assistant.",
		provider: "LingoChat",
		codeSnippet:
			"const languageLesson = chatLanguageLearningAssistant.startLesson();",
		likes: 31,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 123,
		name: "AI-driven Legal Research Assistant NEW",
		category: "Translation",
		description:
			"Assist legal professionals in conducting thorough legal research and analysis using AI capabilities.",
		provider: "LegalResearchGenius",
		codeSnippet:
			"const legalInsights = aiLegalResearchAssistant.research(query);",
		likes: 36,
		imageURL:
			"https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt9b3bcf98b4cd9012/64c9829c84ac5d42cf1b8f35/Untitled_design_-_2023-08-01T170921.666.png?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
	},
	{
		id: 124,
		name: "Voice-controlled Smart Assistant NEW",
		category: "Image-to-Image",
		description:
			"Control your smart home devices through voice commands with this AI-powered voice-controlled assistant.",
		provider: "VoiceSmart",
		codeSnippet:
			"const deviceControl = voiceSmartAssistant.controlDevice(command);",
		likes: 25,
		imageURL:
			"https://eu-images.contentstack.com/v3/assets/blt6b0f74e5591baa03/blt9b3bcf98b4cd9012/64c9829c84ac5d42cf1b8f35/Untitled_design_-_2023-08-01T170921.666.png?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
	},
	{
		id: 125,
		name: "AI-driven Video Game Designer NEW",
		category: "Depth Estimation",
		description:
			"Automatically design levels, characters, and gameplay elements for video games using AI algorithms.",
		provider: "GameDesignGenius",
		codeSnippet: "const gameDesign = aiGameDesigner.designGame();",
		likes: 39,
		imageURL:
			"https://s41256.pcdn.co/wp-content/uploads/2021/02/managing-ai-models.png",
	},
	{
		id: 126,
		name: "AI-powered Cybersecurity Training NEW",
		category: "Text Classification",
		description:
			"Enhance cybersecurity skills through AI-driven training programs and simulations.",
		provider: "CyberSecTrainer",
		codeSnippet:
			"const trainingModule = aiCybersecurityTraining.createModule();",
		likes: 28,
		imageURL:
			"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
	},
	{
		id: 127,
		name: "AI-driven Marketing Analyst NEW",
		category: "Text Classification",
		description:
			"Analyze marketing data and trends to provide actionable insights for effective marketing strategies.",
		provider: "MarketingAnalystGenius",
		codeSnippet:
			"const marketingInsights = aiMarketingAnalyst.analyze(data);",
		likes: 34,
		imageURL:
			"https://s7d1.scene7.com/is/image/dmqualcommprod/on-device-generative-ai-with-sub-10-billion-parameter-models",
	},
	{
		id: 128,
		name: "AI-powered Virtual Receptionist NEW",
		category: "Text-to-Image",
		description:
			"Enhance business communication with an AI-powered virtual receptionist capable of handling calls and messages.",
		provider: "ReceptionistGenius",
		codeSnippet:
			"const callHandling = aiVirtualReceptionist.handleCall(incomingCall);",
		likes: 26,
		imageURL:
			"https://www.einfochips.com/blog/wp-content/uploads/2022/03/OpenAI_GPT-3_the_most_powerful_language_model_An_Overview_Blog_Fetaured_Image.jpg",
	},
];

module.exports = data;
