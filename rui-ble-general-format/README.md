---
rak_desc: RAKwireless Unified Interface (RUI) is the standard interface defined to simplify the firmware development for the ecosystem of the hardware of RAK. RUI defines an API that abstracts the complexity of the hardware layer. Through the RUI API, users can control all the functionalities of the module without the need to deal with the complexity of low-level hardware protocols such as SPI, I2C, etc.
rak_img: /assets/rakwireless/RAK-favicon-blue.png
---
<Block>

# RUI BLE General Format

## General Format

<Example>

```c
rui_ble_xxx()
```

</Example>


</Block>

<Block>


## General Definition

### BLE_CLIENT_EVT_TYPE

<Example>

```c
typedef enum
{
    BLE_CLIENT_EVT_DISCOVERY_COMPLETE = 1,
    BLE_CLIENT_EVT_NOTIFICATION,
    BLE_CLIENT_EVT_READ
}BLE_CLIENT_EVT_TYPE;
```

</Example>

</Block>

<Block>


### BLE_DATA

<Example>

```c
typedef struct
{
    uint8_t   *p_data;
    uint16_t   len;
}BLE_DATA;
```

</Example>


</Block>

<Block>

### BLE_HANDLE

<Example>

```c
typedef struct
{
    uint16_t write_handle;
    uint16_t read_notify_handle;
    uint16_t notify_cccd_handle;
}BLE_HANDLE;
```

</Example>

</Block>


<Block>


### BLE_CLIENT_EVT

<Example>

```c
typedef struct
{
    BLE_CLIENT_EVT_TYPE evt_type;
    uint16_t conn_handle;
    union
    {
        BLE_DATA    data;
        BLE_HANDLE  peer_db;
    }params;
}BLE_CLIENT_EVT;
```

</Example>

</Block>


<Block>


### BLE_CLIENT_EVT_HANDLER

<Example>

```c
typedef void (* BLE_CLIENT_EVT_HANDLER) (BLE_CLIENT * p_ble_rcs_c, BLE_CLIENT_EVT * p_evt);
```

</Example>

</Block>

<Block>


### BLE_CLIENT

<Example>

```c
**@brief Rak Custom Service Client structure. */
struct BLE_CLIENT
{
    uint16_t                 connect_handle;
    HANDLE_LIST              peer_list;
    BLE_CLIENT_EVT_HANDLER   evt_handler;
    uint8_t uuid_type;
};
```


</Example>

</Block>


<Block>

## RUI BLE Scan Advertise Data

<Example>

```c
void rui_ble_scan_adv(int8_t rssi_value, uint8_t *p_adv_data, uint16_t adv_data_len, uint8_t *p_device_mac)
```

</Example>

| @brief | This API is used to scan all around BLE devices andvalid when the BLE works on master mode. | 
| ---- | ---- | 
| **@return** | NULL | 
| **@param** | __int8_t rssi_value__: peripheral rssi value <br> __uint8_t *p_adv_data__: the advertise data <br> __uint16_t adv_data_len__: the length of advertise data <br> __uint8_t *p_device_mac__: the peripheral's MAC address | 
| **@module** | RAK8212-M <br> RAK5010 <br> RAK4600 | 

</Block>


## RUI BLE Event Register Callback

```c
typedef void (*ble_evt_connect)(void);
typedef void (*ble_evt_disconnect)(void);
uint32_t rui_ble_evt_register_callback(ble_evt_connect callback1, ble_evt_disconnect callback2);
```
| @brief | This API is used to register ble event callback functions. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | **ble_evt_connect**: the callback function for ble connected event. <br> **ble_evt_disconnect**: the callback function for ble disconnected event. | 
| **@module** | RAK5010 <br> RAK8212(M) <br> RAK4600 <br> RAK4400 | 

---

## RUI BLE Set Work Mode

```c
RUI_RETURN_STATUS rui_ble_set_work_mode(BLE_WORK_MODE mode, bool long_range_enable);
```

| @brief | This API is used to set the<br>work mode of BLE | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | **BLE_WORK_MODE mode**: BLE_MODE_PERIPHERAL, BLE_MODE_CENTRAL, BLE_MODE_OBSERVER <br> **long_range_enable**: true or false | 
| **@module** | RAK5010 <br> RAK8212(M) <br> RAK4600 <br> RAK4400 | 

---

## RUI BLE Receive Data Notify

```c
void rui_ble_rx_data_notify(uint8_t *pdata, uint16_t len)
```

| @brief | This API is used to receive the notify data coming from other devices through BLE |
| ---- | ---- |
| **@return** | NULL | 
| **@param** | __uint8_t *pdata__:      the receive data <br> __uint16_t len__:       the length of receive data. |
| **@module** | RAK8212-M <br> RAK5010 <br> RAK4600 |

---

## RUI BLE Send Data Write

```c
RUI_RETURN_STATUS rui_ble_tx_data_write(uint8_t *pdata, uint16_t len)
```

| @brief | This API is used to write data to another BLE device through BLE. | 
| ---- | ---- | 
| **@return** | <a href="/RUI/#rui-return-status.html" target="blank">RUI_RETURN_STATUS</a> | 
| **@param** | **uint8_t pdata**: The data which will be sent. <br> **uint16_t len**: The length of data. | 
| **@module** | RAK8212-M <br> RAK5010 <br> RAK4600 | 

---

## RUI BLE Advertising Start

```c
void rui_ble_advertising_start(void);
```

| @brief | This API is used to start advertising in ble peripheral mode. BLE broadcast will stop automatically after 60 seconds. | 
| ---- | ---- | 
| **@return** | NULL | 
| **@param** | NULL | 
| **@module** | RAK5010 <br> RAK8212 <br> RAK8212M <br> RAK4600 <br> RAK4400 | 