// Dummy data
const data1 = [
    { id: 1, title: "Tesla", content: "" },
    { id: 2, title: "Ford", content: "" },
    { id: 3, title: "TATA", content: "" },
    // Add more dummy data here
  ];
  
  // Function to render cards in the sidebar
  function renderCards() {
    const cardList = document.getElementById("cardList");
    cardList.innerHTML = "";
  
    data1.forEach((card) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <div class="bg-#040319 p-4 rounded-md shadow">
          <h3 class="text-lg font-semibold">${card.title}</h3>
          <p class="text-gray-600">${card.content}</p>
        </div>
      `;
  
      cardList.appendChild(listItem);
    });
  }
  
  // Function to handle search functionality
  function handleSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = data1.filter((card) => card.title.toLowerCase().includes(searchTerm));
    renderFilteredCards(filteredData);
  }
  
  // Function to render filtered cards in the sidebar
  function renderFilteredCards(filteredData) {
    const cardList = document.getElementById("cardList");
    cardList.innerHTML = "";
  
    filteredData.forEach((card) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <div class="bg-#040319 p-4 rounded-md shadow">
          <h3 class="text-lg font-semibold">${card.title}</h3>
          <p class="text-gray-600">${card.content}</p>
        </div>
      `;
  
      cardList.appendChild(listItem);
    });
  }
  
  // Function to handle add card functionality
  function handleAddCard(event) {
    event.preventDefault();
    const titleInput = document.getElementById("titleInput");
    const contentInput = document.getElementById("contentInput");
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();
  
    if (title === "" || content === "") {
      return;
    }
  
    const newCard = {
      id: data1.length + 1,
      title: title,
      content: content,
    };
  
    data1.push(newCard);
    renderCards();
  
    // Reset the form inputs
    titleInput.value = "";
    contentInput.value = "";
  
    // Close the modal
    closeModal();
  }
  
  // Function to open the add card modal
  function openModal() {
    const addCardModal = document.getElementById("addCardModal");
    addCardModal.classList.remove("hidden");
  }
  
  // Function to close the add card modal
  function closeModal() {
    const addCardModal = document.getElementById("addCardModal");
    addCardModal.classList.add("hidden");
  }
  
  // Event listeners
  document.getElementById("searchInput").addEventListener("input", handleSearch);
  document.getElementById("addCardButton").addEventListener("click", openModal);
  document.getElementById("addCardForm").addEventListener("submit", handleAddCard);
  document.getElementById("cancelButton").addEventListener("click", closeModal);
  
  // Initial render
  renderCards();
  