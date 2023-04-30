using UnityEngine;
using UnityEngine.UI;

public class InventoryUI : MonoBehaviour
{
    public Inventory inventory;
    public GameObject inventorySlotPrefab;
    public GameObject draggableItemPrefab;
    public Transform inventorySlotContainer;

    private void Start()
    {
        inventory = FindObjectOfType<Inventory>();
    }

    private void Update()
    {
        UpdateUI();
    }

    public void UpdateUI()
    {
        for (int i = 0; i < inventory.items.Count; i++)
        {
            if (i < inventorySlotContainer.childCount)
            {
                inventorySlotContainer.GetChild(i).GetComponentInChildren<Image>().sprite = inventory.items[i].itemSprite;
                Button button = inventorySlotContainer.GetChild(i).GetComponent<Button>();
                int itemIndex = i; // Guardar el índice del artículo en una variable local
                button.onClick.RemoveAllListeners(); // Eliminar todos los listeners previos
                button.onClick.AddListener(() => OnItemButtonClicked(itemIndex)); // Agregar un nuevo listener con el índice del artículo
            }
            else
            {
                GameObject newSlot = Instantiate(inventorySlotPrefab, inventorySlotContainer);
                newSlot.GetComponentInChildren<Image>().sprite = inventory.items[i].itemSprite;
                Button button = newSlot.GetComponent<Button>();
                int itemIndex = i; // Guardar el índice del artículo en una variable local
                button.onClick.AddListener(() => OnItemButtonClicked(itemIndex)); // Agregar un listener con el índice del artículo
            }
        }
    }

    public void OnItemButtonClicked(int itemIndex)
    {
        if (itemIndex >= 0 && itemIndex < inventory.items.Count)
        {
            inventory.UseItem(inventory.items[itemIndex], draggableItemPrefab);
        }
    }
}
