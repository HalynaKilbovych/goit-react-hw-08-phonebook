import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { notificationError } from "utils/Notifacation/Notifacation";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get('/contacts');
        if (response.data.length === 0) {
          notificationError(); 
        }
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, phone }, { rejectWithValue }) => {
      try {
        const response = await axios.post('/contacts', { name, phone });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue }) => {
      try {
        const response = await axios.delete(`/contacts/${id}`);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );