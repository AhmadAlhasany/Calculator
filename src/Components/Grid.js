import React from 'react'
import Button from './Button'

function Grid(props) {
  return (
    <div className='grid'>
        <Button value = {7} onClick = {() => {props.setExp(pre => {
        if(pre[pre.length - 1] === '0')
          if(pre.length === 1 || pre[pre.length - 2] === ' ')
            return pre.substring(0, pre.length - 1)  + '7'
          return pre + '7'})}}/>
        <Button value = {8} onClick = {() => {props.setExp(pre => {
       if(pre[pre.length - 1] === '0')
          if(pre.length === 1 || pre[pre.length - 2] === ' ')
            return pre.substring(0, pre.length - 1)  + '8'          
          return pre + '8'})}}/>
        <Button value = {9} onClick = {() => {props.setExp(pre => {
       if(pre[pre.length - 1] === '0')
          if(pre.length === 1 || pre[pre.length - 2] === ' ')
            return pre.substring(0, pre.length - 1)  + '9'          
          return pre + '9'})}}/>
        <Button value = 'DEL' c = 'rd' onClick = {() => {props.setExp(pre => {
          if(pre[pre.length - 1] !== ' ')
            return pre.substring(0, pre.length - 1)
          else
            return pre.substring(0, pre.length - 3)
        })}}/>
        <Button value = {4} onClick = {() => {props.setExp(pre => {
       if(pre[pre.length - 1] === '0')
          if(pre.length === 1 || pre[pre.length - 2] === ' ')
            return pre.substring(0, pre.length - 1)  + '4'          
          return pre + '4'})}}/>
        <Button value = {5} onClick = {() => {props.setExp(pre => {
       if(pre[pre.length - 1] === '0')
          if(pre.length === 1 || pre[pre.length - 2] === ' ')
            return pre.substring(0, pre.length - 1)  + '5'          
          return pre + '5'})}}/>
        <Button value = {6} onClick = {() => {props.setExp(pre => {
       if(pre[pre.length - 1] === '0')
          if(pre.length === 1 || pre[pre.length - 2] === ' ')
            return pre.substring(0, pre.length - 1)  + '6'          
          return pre + '6'})}}/>
        <Button value = '+' onClick = {() => {props.setExp(pre => {
          if(pre && pre[pre.length-1] !== ' ')
            return pre + ' + '
          else if (pre)
            return pre.substring(0, pre.length - 3) + ' + ';
          else
          return ''
        })}}/>
        <Button value = {1} onClick = {() => {props.setExp(pre => {
       if(pre[pre.length - 1] === '0')
          if(pre.length === 1 || pre[pre.length - 2] === ' ')
            return pre.substring(0, pre.length - 1)  + '1'          
          return pre + '1'})}}/>
        <Button value = {2} onClick = {() => {props.setExp(pre => {
       if(pre[pre.length - 1] === '0')
          if(pre.length === 1 || pre[pre.length - 2] === ' ')
            return pre.substring(0, pre.length - 1)  + '2'          
          return pre + '2'})}}/>
        <Button value = {3} onClick = {() => {props.setExp(pre => {
       if(pre[pre.length - 1] === '0')
          if(pre.length === 1 || pre[pre.length - 2] === ' ')
            return pre.substring(0, pre.length - 1)  + '3'          
          return pre + '3'})}}/>
        <Button value = '-' onClick = {() => {props.setExp(pre => {
          if(pre && pre[pre.length-1] !== ' ')
            return pre + ' - '
          else if (pre)
            return pre.substring(0, pre.length - 3) + ' - ';
          else
            return ''
          
        })}}/>
        <Button value = '.' onClick = {() => {props.setExp(pre => {
          let al = true, n = pre.length -1 
          while(n > -1)
          {
            if(pre[n] === ' ')
              break
            else if(pre[n] === '.')
            {
              al = false
              break
            }
            n--
          }
          if(al)
          return pre + '.'
          else
          return pre
        })}}/>
        <Button value = {0} onClick = {() => {props.setExp(pre => {
          let all = true, n = pre.length - 1
          while(n > -1){
            if(pre[n] === '0'){
              all = false
            }
            else if(pre[n] !== ' '){
              all = true
              break
            }else
            break
            n--;
          }
           if(all)
              return pre + '0'
           else
            return pre
          })}}/>
        <Button value = '/' onClick = {() => {props.setExp(pre => {
          if(pre && pre[pre.length-1] !== ' ')
            return pre + ' / '
          else if (pre)
            return pre.substring(0, pre.length - 3) + ' / ';
          else 
            return ''
          
        })}}/>
        <Button value = 'x' onClick = {() => {props.setExp(pre => {
          if(pre && pre[pre.length-1] !== ' ')
            return pre + ' * '
          else if (pre)
            return pre.substring(0, pre.length - 3) + ' * ';
          else
            return ''
        })}}/>
        <Button value = 'RESET' c = 't1 rd' onClick = {() => {props.setExp('')}}/>
        <Button value = '=' c = 't2 e' onClick = {() => {props.setExp(pre => {
          if(!pre)
            return ''
          else if(pre[pre.length-1] !== ' ')
            return String(eval(pre))
          else
            return String(eval(pre.substring(0,pre.length-3)))
        })}}/>
    </div>
  )
}

export default Grid