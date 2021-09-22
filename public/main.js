'use strict'
window.$ = require('jquery')
window.jQuery = require('jquery')
import '/plugins/slick/slick'
import '/plugins/chartJs/dist/chart'
import '/styles/jquery-ui/jquery-ui'
import '/plugins/datepicker/datepicker'
import {initDatePicker} from '/js/datepickerLogic'
import {initRangeSlider} from '/js/rangesliderLogic'
import {initChartPie} from '/js/chartPie'
import {initSlick} from '/js/slickJs'
import {dropDownList} from '/js/dropDownList'
import {initDropMenu} from '/js/dropMenu'
import {initLikeButtons} from '/js/likeButtons'

$(document).ready(function(){
  
  initDatePicker();
  initRangeSlider();
  dropDownList();
  initChartPie();
  initSlick();
  initDropMenu();
  initLikeButtons();

})


