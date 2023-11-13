import React from 'react'
import Button from './Button'

function Grid(props) {
  return (
    <div className='grid'>
        <Button value = {7} onClick = {() => {props.setExp(pre => {return (pre + '7')})}}/>
        <Button value = {8} onClick = {() => {props.setExp(pre => {return pre + '8'})}}/>
        <Button value = {9} onClick = {() => {props.setExp(pre => {return pre + '9'})}}/>
        <Button value = 'DEL' c = 'rd' onClick = {() => {props.setExp(pre => {
          if(pre[pre.length - 1] !== ' ')
            return pre.substring(0, pre.length - 1)
          else
            return pre.substring(0, pre.length - 3)
        })}}/>
        <Button value = {4} onClick = {() => {props.setExp(pre => {return pre + '4'})}}/>
        <Button value = {5} onClick = {() => {props.setExp(pre => {return pre + '5'})}}/>
        <Button value = {6} onClick = {() => {props.setExp(pre => {return pre + '6'})}}/>
        <Button value = '+' onClick = {() => {props.setExp(pre => {
          if(pre && pre[pre.length-1] !== ' ')
            return pre + ' + '
          else if (pre)
            return pre.substring(0, pre.length - 3) + ' + ';
          else
          return ''
        })}}/>
        <Button value = {1} onClick = {() => {props.setExp(pre => {return pre + '1'})}}/>
        <Button value = {2} onClick = {() => {props.setExp(pre => {return pre + '2'})}}/>
        <Button value = {3} onClick = {() => {props.setExp(pre => {return pre + '3'})}}/>
        <Button value = '-' onClick = {() => {props.setExp(pre => {
          if(pre && pre[pre.length-1] !== ' ')
            return pre + ' - '
          else if (pre)
            return pre.substring(0, pre.length - 3) + ' - ';
          else
            return ''
          
        })}}/>
        <Button value = '.' onClick = {() => {props.setExp(pre => {return pre + '.'})}}/>
        <Button value = {0} onClick = {() => {props.setExp(pre => {if(pre && pre[pre.length - 1] != ' ')
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