import { ref } from 'vue'

export function useCarbonCredits() {
  const carbonCredits = ref([
    { id: 1, project: 'Mau Forest Conservation', quantity: 1000, status: 'Verified' },
    { id: 2, project: 'Coastal Mangrove Restoration', quantity: 750, status: 'Pending' },
    { id: 3, project: 'Sustainable Agriculture Initiative', quantity: 500, status: 'Verified' },
  ])

  // Add functions to manage carbon credits here

  return {
    carbonCredits
  }
}