import { View, StyleSheet, FlatList, TouchableOpacity, ScrollView, Modal, TextInput, Alert, Button } from 'react-native';
import { Text } from '@/components/Themed';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const getStatusColor = (status: TaskStatus) => {
  switch (status) {
    case 'completed': return '#4CAF50';
    case 'in_progress': return '#FFC107';
    case 'incomplete': return '#F44336';
    default: return '#9E9E9E';
  }
};

interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  location: string;
  category: string;
  description: string;
  status: TaskStatus;
  note: string;
}

type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
type TaskStatus = 'not_started' | 'in_progress' | 'completed' | 'incomplete';

// Existing types and initialSchedule omitted for brevity
const initialSchedule = {
  Monday: [
    {
      id: '1',
      time: '08:50-11:40',
      title: 'A.I Lesson',
      location: 'F-33',
      category: 'study',
      description: 'Learning AI like Bran using the Weirwood network',
      status: 'not_started' as TaskStatus,
      note: '',
    },
    {
      id: '2',
      time: '11:50-15:20',
      title: 'Computer Test',
      location: 'G309',
      category: 'study',
      description: 'Facing tests like Jon Snow faced the Night\'s Watch trials',
      status: 'not_started' as TaskStatus,
      note: '',
    }
  ],
  Tuesday: [
    {
      id: '3',
      time: '8:50-10:10',
      title: 'Physics',
      location: '404',
      category: 'study',
      description: 'Understanding forces like Melisandre understands the Lord of Light',
      status: 'not_started' as TaskStatus,
      note: '',
    },
    {
      id: '4',
      time: '10:20-11:40',
      title: 'Japanese Language',
      location: 'G309',
      category: 'language',
      description: 'Learning new languages like Missandei of Naath',
      status: 'not_started' as TaskStatus,
      note: '',
    },
    {
      id: '5',
      time: '13:10-15:20',
      title: 'Computer Parts',
      location: 'F-33',
      category: 'practical',
      description: 'Assembling parts like Tyrion assembling the Second Sons',
      status: 'not_started' as TaskStatus,
      note: '',
    }
  ],
  Wednesday: [
    {
      id: '6',
      time: '8:50-10:10',
      title: 'Mathematics',
      location: '404',
      category: 'study',
      description: 'Solving problems like Varys solving political puzzles',
      status: 'not_started' as TaskStatus,
      note: '',
    },
    {
      id: '7',
      time: '10:20-13:10',
      title: 'Linux Lesson',
      location: 'F-33',
      category: 'practical',
      description: 'Mastering systems like Bran mastering the Three-Eyed Raven powers',
      status: 'not_started' as TaskStatus,
      note: '',
    }
  ],
  Thursday: [
    {
      id: '8',
      time: '8:50-10:10',
      title: 'Mathematics',
      location: '404',
      category: 'study',
      description: 'Calculating like Littlefinger counting his coins',
      status: 'not_started' as TaskStatus,
      note: '',
    },
    {
      id: '9',
      time: '10:20-11:50',
      title: 'Teacher Time',
      location: '404',
      category: 'meeting',
      description: 'Seeking guidance like Jon Snow sought Aemon Targaryen\'s wisdom',
      status: 'not_started' as TaskStatus,
      note: '',
    }
  ],
  Friday: [
    {
      id: '10',
      time: '8:50-10:10',
      title: 'Japanese Language',
      location: '404',
      category: 'language',
      description: 'Speaking foreign tongues like Daenerys speaking Dothraki',
      status: 'not_started' as TaskStatus,
      note: '',
    },
    {
      id: '11',
      time: '10:20-15:20',
      title: 'Mobile Technology',
      location: 'G309',
      category: 'practical',
      description: 'Building apps like Samwell building his knowledge at the Citadel',
      status: 'not_started' as TaskStatus,
      note: '',
    }
  ],
  Saturday: [
    {
      id: '12',
      time: '10:00',
      title: 'Gym Time',
      location: 'Gold\'s Gym',
      category: 'fitness',
      description: 'Training like Khal Drogo preparing for battle',
      status: 'not_started' as TaskStatus,
      note: '',
    },
    {
      id: '13',
      time: '16:00',
      title: 'Church',
      location: 'Local Church',
      category: 'spiritual',
      description: 'Finding peace like Septon Ray taught the Hound',
      status: 'not_started' as TaskStatus,
      note: '',
    }
  ],
  Sunday: [
    {
      id: '14',
      time: 'All day',
      title: 'Weekend Rest',
      location: 'Home',
      category: 'rest',
      description: 'Relaxing like Tyrion with a good book and wine',
      status: 'not_started' as TaskStatus,
      note: '',
    }
  ]
};

export default function ScheduleScreen() {
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>('Monday');
  const [schedule, setSchedule] = useState<typeof initialSchedule>(initialSchedule);
  const [modalVisible, setModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<ScheduleItem | null>(null);
  const [note, setNote] = useState('');
  const [newSchedule, setNewSchedule] = useState({
    time: '',
    title: '',
    location: '',
    category: '',
    description: '',
  });

  useEffect(() => {
    const loadSchedule = async () => {
      try {
        const savedSchedule = await AsyncStorage.getItem('schedule');
        if (savedSchedule) {
          setSchedule(JSON.parse(savedSchedule));
        }
      } catch (error) {
        console.error('Error loading schedule:', error);
      }
    };
    loadSchedule();
  }, []);

  useEffect(() => {
    const saveSchedule = async () => {
      try {
        await AsyncStorage.setItem('schedule', JSON.stringify(schedule));
      } catch (error) {
        console.error('Error saving schedule:', error);
      }
    };
    saveSchedule();
  }, [schedule]);

  const addSchedule = () => {
    if (!newSchedule.time || !newSchedule.title || !newSchedule.location) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    const newTask: ScheduleItem = {
      id: Date.now().toString(),
      time: newSchedule.time,
      title: newSchedule.title,
      location: newSchedule.location,
      category: newSchedule.category || 'other',
      description: newSchedule.description || '',
      status: 'not_started',
      note: '',
    };

    setSchedule((prev) => {
      const updated = { ...prev };
      updated[selectedDay] = [...updated[selectedDay], newTask];
      return updated;
    });

    setAddModalVisible(false);
    setNewSchedule({
      time: '',
      title: '',
      location: '',
      category: '',
      description: '',
    });
  };

  return (
    <View style={styles.container}>
      {/* Day Selector */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.daysContainer}>
        {Object.keys(schedule).map((day) => (
          <TouchableOpacity
            key={day}
            style={[styles.dayButton, selectedDay === day && styles.selectedDayButton]}
            onPress={() => setSelectedDay(day as DayOfWeek)}
          >
            <Text style={[styles.dayText, selectedDay === day && styles.selectedDayText]}>{day}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
        
      {/* Schedule List */}
      <FlatList
        data={schedule[selectedDay]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.scheduleItem,
              { borderLeftColor: getStatusColor(item.status), borderLeftWidth: 5 },
            ]}
            onPress={() => handleTaskPress(item)}
          >
            <View style={styles.timeContainer}>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.location}>{item.location}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setAddModalVisible(true)}
      >
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>

      {/* Add Schedule Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={addModalVisible}
        onRequestClose={() => setAddModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Add New Schedule</Text>
          <TextInput
            style={styles.input}
            placeholder="Time (e.g., 08:00-10:00)"
            value={newSchedule.time}
            onChangeText={(text) => setNewSchedule((prev) => ({ ...prev, time: text }))}
          />
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={newSchedule.title}
            onChangeText={(text) => setNewSchedule((prev) => ({ ...prev, title: text }))}
          />
          <TextInput
            style={styles.input}
            placeholder="Location"
            value={newSchedule.location}
            onChangeText={(text) => setNewSchedule((prev) => ({ ...prev, location: text }))}
          />
          <TextInput
            style={styles.input}
            placeholder="Category"
            value={newSchedule.category}
            onChangeText={(text) => setNewSchedule((prev) => ({ ...prev, category: text }))}
          />
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="Description"
            multiline
            value={newSchedule.description}
            onChangeText={(text) => setNewSchedule((prev) => ({ ...prev, description: text }))}
          />
          <View style={styles.modalButtons}>
            <TouchableOpacity style={[styles.button, styles.buttonCancel]} onPress={() => setAddModalVisible(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={addSchedule}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Additional styles for FAB and modal omitted for brevity
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  descriptionInput: { // This is the new style you need to define
    height: 80,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 20,
    textAlignVertical: 'top', // To ensure the text aligns to the top in a multiline input
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#c41e3a',
    borderRadius: 50,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  fabIcon: {
    color: 'white',
    fontSize: 24,
  },
  daysContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  dayButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  selectedDayButton: {
    backgroundColor: '#c41e3a',
  },
  dayText: {
    fontSize: 16,
    color: '#666',
  },
  selectedDayText: {
    color: 'white',
    fontWeight: 'bold',
  },
  scheduleItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 16,
    padding: 16,
    elevation: 2,
  },
  timeContainer: {
    marginRight: 16,
    justifyContent: 'center',
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#c41e3a',
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#444',
    fontStyle: 'italic',
  },
  noteContainer: {
    marginTop: 8,
    padding: 8,
    backgroundColor: '#f8f8f8',
    borderRadius: 4,
  },
  noteText: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#666',
  },
  modalView: {
    margin: 20,
    marginTop: 'auto',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  noteInput: {
    height: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    minWidth: 100,
  },
  buttonSave: {
    backgroundColor: '#4CAF50',
  },
  buttonCancel: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});