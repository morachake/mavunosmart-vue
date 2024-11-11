import { ref } from 'vue'

interface CarbonCredit {
  id: number
  project: string
  quantity: number
  status: 'Verified' | 'Pending'
  date: string
}

export function useCarbonCredit() {
  const carbonCredits = ref<CarbonCredit[]>([
    {
      id: 1,
      project: 'Mau Forest Conservation',
      quantity: 1000,
      status: 'Verified',
      date: '2024-04-03'
    },
    {
      id: 2,
      project: 'Coastal Mangrove Restoration',
      quantity: 750,
      status: 'Pending',
      date: '2024-04-02'
    },
    {
      id: 3,
      project: 'Mt. Kenya Reforestation',
      quantity: 500,
      status: 'Verified',
      date: '2024-04-01'
    }
  ])

  const addCarbonCredit = (credit: Omit<CarbonCredit, 'id'>) => {
    carbonCredits.value.push({
      id: Date.now(),
      ...credit
    })
  }

  const removeCarbonCredit = (id: number) => {
    carbonCredits.value = carbonCredits.value.filter(credit => credit.id !== id)
  }

  const updateCarbonCredit = (id: number, updates: Partial<CarbonCredit>) => {
    const index = carbonCredits.value.findIndex(credit => credit.id === id)
    if (index !== -1) {
      carbonCredits.value[index] = { ...carbonCredits.value[index], ...updates }
    }
  }

  return {
    carbonCredits,
    addCarbonCredit,
    removeCarbonCredit,
    updateCarbonCredit
  }
}