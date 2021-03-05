import React from 'react';
import config from './config.json'
import http from "./httpService";
import axios from 'axios'


export const getCourses = () => {
     return axios.get(`${config.toplearnapi}/api/courses`);
 };
 
 export const getCourse = courseId => {
     return axios.get(`${config.toplearnapi}/api/course/${courseId}`);
 };

 export const newCourse = course => {
     return axios.post(`${config.toplearnapi}/api/course`,course);
 };

 export const deleteCourse = courseId => {
    return http.delete(`${config.toplearnapi}/api/course/${courseId}`);
 };

 export const updateCourse = (courseId ,course ) => {
    return axios.delete(`${config.toplearnapi}/api/course/${courseId}` , course);
 };
 