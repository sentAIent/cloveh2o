// Run this to verify the pipeline
async function testMarketingPipeline() {
  const testPayload = {
    batch_id: "TEST-DROP-001",
    filename: "test-content",
    markdown_content: "# Test Drop\nThis is an automated test of the SentAIent marketing engine."
  };

  console.log("🚀 Initializing Test PR...");
  
  // Trigger n8n webhook
  const response = await fetch("http://localhost:5678/webhook/marketing-trigger", {
    method: "POST",
    body: JSON.stringify(testPayload),
    headers: { "Content-Type": "application/json" }
  });

  if (response.ok) {
    console.log("✅ Pipeline triggered successfully! Check GitHub for a new PR.");
  } else {
    console.error("❌ Pipeline trigger failed.");
  }
}

testMarketingPipeline();
