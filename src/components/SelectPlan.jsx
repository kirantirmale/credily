import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Box, CardMedia, Checkbox, FormControlLabel } from '@mui/material';
import snb from '../images/bank/SNBLogo.png';
import alrajhibanklogo from '../images/bank/alrajhibanklogo.png';
import riyadhbankpng from '../images/bank/riyadhbankpng.png';
import anbBankLogo from '../images/bank/anbBankLogo.png';
import emiratesnbdlogok from '../images/bank/emiratesnbdlogok.png';
import BankAljazira from '../images/bank/BankAljazira.png';

const plans = [
  { id: 1, name: 'Basic Plan', price: '$10/month', apr: '4.65%', installment: '1442 SAR', residual: '40,000 SAR', image: snb },
  { id: 2, name: 'Standard Plan', price: '$20/month', apr: '4.90%', installment: '1525 SAR', residual: '35,000 SAR', image: alrajhibanklogo },
  { id: 3, name: 'Premium Plan', price: '$30/month', apr: '4.95%', installment: '1560 SAR', residual: '40,000 SAR', image: riyadhbankpng },
  { id: 4, name: 'Advanced Plan', price: '$40/month', apr: '5.25%', installment: '1550 SAR', residual: '30,000 SAR', image: anbBankLogo },
  { id: 5, name: 'Ultimate Plan', price: '$50/month', apr: '5.50%', installment: '1630 SAR', residual: '30,000 SAR', image: emiratesnbdlogok },
  { id: 6, name: 'Ultimate Plan', price: '$50/month', apr: '5.50%', installment: '1630 SAR', residual: '30,000 SAR', image: BankAljazira }
];

const SelectPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const storedPlan = localStorage.getItem('selectedPlan');
    if (storedPlan) {
      setSelectedPlan(JSON.parse(storedPlan));
    }
  }, []);

  const handleSelect = (plan) => {
    setSelectedPlan(plan);
    localStorage.setItem('selectedPlan', JSON.stringify(plan));
  };

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2} mt={4}>
      {plans.map((plan) => (
        <Card key={plan.id} sx={{ width: 300, textAlign: 'center', border: selectedPlan?.id === plan.id ? '2px solid blue' : 'none' }}>
          <CardMedia component="img"sx={{ height: 70, objectFit: 'contain' }} image={plan.image} alt={plan.name} />
          <CardContent>
            <Typography variant="h6">{plan.name}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {plan.price}
            </Typography>
            <Typography variant="body2">APR: {plan.apr}</Typography>
            <Typography variant="body2">Monthly Installment: {plan.installment}</Typography>
            <Typography variant="body2">Residual Value: {plan.residual}</Typography>
            <FormControlLabel
              control={<Checkbox checked={selectedPlan?.id === plan.id} onChange={() => handleSelect(plan)} />}
              label="Select"
            />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default SelectPlan;
