/*
 * MODULE VUEX
 * TASKS
 * =================================================
 */

const state = {
	task: {
		list: [
			{
				id: 1,
				name: 'Sáng chạy bộ 30 phút ',
			},
			{
				id: 2,
				name: 'Báo cáo công việc',
			},
			{
				id: 3,
				name: 'Học tiếng anh',
			}
		]
	}
};

const getters = {
	getTaskList(state) {
		return state.task.list;
	},
	getTotalTaskList(state) {
		return state.task.list.length;
	},
	getTaskLast(state) {
		return state.task.list[state.task.list.length - 1];
	}
};

const actions = {
	addTask({commit}, task) {
		const taskNew = {
			id: task.id,
			name: task.name,
			status: {
				done: false
			}
		};
		commit('addTask', taskNew);
	},
	updateTask({commit}, task) {
		commit('updateTask', task);
	},
	removeTask({commit}, taskId) {
		commit('removeTask', taskId);
	},
	removeTaskList({commit}) {
		commit('removeTaskList');
	},
	removeTaskListDone({commit}) {
		commit('removeTaskListDone');
	},
	checkTaskListLocalStorage({commit}) {
		if (localStorage.getItem('tasks')) {
			try {
				commit('updateTaskListLocalStorage');
			} catch (e) {
				commit('removeTaskListLocalStorage');
			}
		} else {
			commit('createTaskListLocalStorage');
		}
	},
	createTaskListLocalStorage({commit}) {
		commit('createTaskListLocalStorage');
	}
};

const mutations = {
	addTask(state, task) {
		state.task.list.push(task);
	},
	updateTask(state, task) {
		const taskIndex = state.task.list.findIndex(item => item.id === task.id);
		if (taskIndex !== -1) {
			state.task.list.splice(taskIndex, 1, task);
		}
	},
	removeTask(state, taskId) {
		state.task.list = state.task.list.filter(item => item.id !== taskId);
	},
	removeTaskList(state) {
		state.task.list = [];
	},
	createTaskListLocalStorage(state) {
		localStorage.setItem('tasks', JSON.stringify(state.task.list));
	},
	updateTaskListLocalStorage(state) {
		state.task.list = JSON.parse(localStorage.getItem('tasks'));
	},
	removeTaskListLocalStorage() {
		localStorage.removeItem('tasks');
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
