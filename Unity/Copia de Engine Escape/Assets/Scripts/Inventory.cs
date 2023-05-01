using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Inventory : MonoBehaviour
{
    public List<Item> items = new List<Item>();
    public GameObject draggableItemPrefab;
    private GameObject draggedItem;

    public void AddItem(Item item)
    {
        items.Add(item);
    }

    public void UseItem(Item item, GameObject draggableItemPrefab)
    {
        // Crear una instancia del prefab "DraggableItem"
        draggedItem = Instantiate(draggableItemPrefab);
        draggedItem.name = "Dragged Item";
        SpriteRenderer spriteRenderer = draggedItem.GetComponent<SpriteRenderer>();
        spriteRenderer.sprite = item.itemSprite;
        spriteRenderer.sortingOrder = 1; // Asegurarse de que el objeto arrastrado esté en una capa superior

        // Comenzar a arrastrar el objeto
        StartCoroutine(DragItem());
    }

    private IEnumerator DragItem()
    {
        while (Input.GetMouseButton(0))
        {
            // Convertir la posición del cursor del mouse a coordenadas de mundo
            Vector3 mousePosition = Input.mousePosition;
            mousePosition.z = 10f; // Ajustar la distancia en el eje Z para que el objeto se muestre correctamente en la cámara
            Vector3 worldPosition = Camera.main.ScreenToWorldPoint(mousePosition);

            // Actualizar la posición del objeto arrastrado
            draggedItem.transform.position = new Vector3(worldPosition.x, worldPosition.y, 0f);

            // Esperar al siguiente fotograma
            yield return null;
        }

        // Destruir el objeto arrastrado cuando se suelta el botón del mouse
        Destroy(draggedItem);
    }
}
