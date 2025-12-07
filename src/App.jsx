import React, { useState } from 'react';
import Layout from './components/Layout';
import Research from './components/Research';
import ProductDoc from './components/ProductDoc';
import Plan from './components/Plan';
import Blueprint from './components/Blueprint';
import Idea from './components/Idea';

function App() {
  const [currentStep, setCurrentStep] = useState('idea');

  // Central State
  const [researchData, setResearchData] = useState('');
  const [productIdea, setProductIdea] = useState({
    name: '',
    problem: '',
    solution: '',
    audience: '',
    features: ''
  });
  const [plan, setPlan] = useState('');
  const [blueprint, setBlueprint] = useState('');

  const renderStep = () => {
    switch (currentStep) {
      case 'idea':
        return <Idea data={productIdea} setData={setProductIdea} />;
      case 'research':
        return <Research data={researchData} setData={setResearchData} />;
      case 'prd': // Renamed from 'idea' to match Sidebar
        return <ProductDoc data={productIdea} setData={setProductIdea} />;
      case 'plan':
        return <Plan data={plan} setData={setPlan} />;
      case 'blueprint':
        return <Blueprint data={blueprint} setData={setBlueprint} />;
      case 'code':
        return <CodePrompt data={{ researchData, productIdea, plan, blueprint }} />;
      default:
        return <Idea data={productIdea} setData={setProductIdea} />;
    }
  };

  return (
    <Layout currentStep={currentStep} onStepChange={setCurrentStep}>
      {renderStep()}
    </Layout>
  );
}

export default App;
