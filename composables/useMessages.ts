import { ref } from 'vue'

export function useMessages() {
  const messages = ref([
    { id: 1, name: 'John Doe', email: 'john@example.com', date: '2024-04-02', content: 'Im interested in purchasing carbon credits for my company. Can you provide more information?' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', date: '2024-04-01', content: 'How can I get involved in your sustainable farming initiatives?' },
  ])

  // Add functions to manage messages here

  return {
    messages
  }
}