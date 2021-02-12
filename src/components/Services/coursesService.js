import React from 'react';
import config from './config.json'
import axios from 'axios'


export const getCourses = () => {
     return axios.get(`${config.toplearnapi}/api/courses`);
 };
 
 export const getCourse = courseId => {
     return axios.get(`${config.toplearnapi}/api/course/${courseId}`);
 };
 