import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { AutoMateResult } from "src/app/common/netResult";
import { fromEvent } from 'rxjs';
import { AuthorityService } from 'src/app/services/authority.service';
@Component({
  selector: 'app-aicompetence',
  templateUrl: './aicompetence.component.html',
  styleUrls: ['./aicompetence.component.css']
})
export class AicompetenceComponent implements OnInit {
  public showIpList = false;
  public showIpList2 = false;
  constructor(public http: CommonService, private router: Router, private authService: AuthorityService,) { }
  public ip = "内网IP";
  public timer = null;
  public showLogo = '0';
  // 系统应用
  public showSystemApplication = false;
  public systemApplicationList = [{
    id: 0,
    name: '虚拟机列表',
    path: ''
  }, {
    id: 1,
    name: 'IP地址修改',
    path: ''
  }];
  // 自动化应用
  public showAutomationApplication = false;
  // AI应用
  public showAIApplication = false;
  public aIApplicationList = [{
    id: 0,
    name: '总览',
  }];
  // 用户信息
  public showUserList = false;
  public userList = [
    {
      id: 1,
      ipName: "账号信息",
      ipRoute: "/user/home/userinfo"
    },
    {
      id: 2,
      ipName: "退出登录",
      ipRoute: ""
    }
  ];
  public userInfo = {
    userId: '',
    username: '',
    password: '',
    hwUserName: '',
    hwPassword: '',
    hwDomainName: '',
    startTime: '',
    endTime: ''
  };
  urlConfig = {
    applicationManage: '',
    jobManage: '',
    businessTemplate: '',
  };
  choose(ip, vmsName) {
    this.ip = ip;
    localStorage.setItem('currentIp', ip);
    localStorage.setItem('currentVmsName', vmsName);
  }
  ngOnInit(): void {
    // this.getNodeList();
    if (localStorage.getItem('urlConfig')) {
      this.urlConfig = JSON.parse(localStorage.getItem('urlConfig'));//自动化应用url
    }
    this.ip = localStorage.getItem('currentIp');
    this.showLogo = sessionStorage.getItem('logo');
    this.getUserInfo();
    window.addEventListener('setItemEvent', (e) => {
      Object.keys(e).forEach((key) => {
        if (e[key] === 201) {
          this.showLogo = "201";
        } else {
          this.showLogo = '0';
        }
      });
    });
    fromEvent(window, 'mousewheel').subscribe(() => {
      // 页面滚动监听，移除tooltip
      const myBody = document.body;
      const selectContainerList = myBody.querySelectorAll('.cdk-overlay-container');
      for (let i = 0; i < selectContainerList.length; i++) {
        const selectContainer = selectContainerList[i];
        if (selectContainer && selectContainer.children) {
          for (let index = 0; index < selectContainer.children.length; index++) {
            const element = selectContainer.children[index];
            for (let j = 0; j < element.children.length; j++) {
              const last = element.children[j];
              // querySelectorAll返回匹配指定 CSS 选择器元素的所有子元素节点列表
              if (last.firstChild && last.querySelectorAll('.ant-tooltip').length != 0) {
                last.removeChild(last.firstChild);
              }
            }
          }
        }
      }
    });
  }
  openIpList() {
    this.showIpList = !this.showIpList;
  }
  goHelp() {
    this.router.navigate(['/aicompetence/aihelp'], {});
  }

  goAuotMate() {
    this.router.navigate(['/user/home/userinfo']);
    //this.router.navigate(['/user/home/userinfo'], {});
  }
  goMonitor() {
    this.router.navigate(['/aicompetence/aiapply/controlability'], {});
    localStorage.setItem("logo", '208');
  }
  goHomeData() {
    this.router.navigate(['/user/home/data'], {});
  }
  goRegister() {
    this.router.navigate(['/user/register'], {});
  }

  //退出登录
  logout() {
    localStorage.removeItem("TOKEN");
    this.authService.removeRoles();
    this.router.navigate(['/login']);
  }

  getUserInfo(): void {
    const token = localStorage.getItem("TOKEN");
    if (token != null) {
      const tokenObj = JSON.parse(token);
      this.userInfo.username = tokenObj.user[0].name
      this.userInfo.hwDomainName = tokenObj.user[0].domain.name;
    }
  }

  // 系统应用
  showSystem() {
    this.showSystemApplication = !this.showSystemApplication;
    this.showAutomationApplication = false;
    this.showAIApplication = false;
    this.showUserList = false;
  }
  chooseSystem(name) {
    switch (name) {
      case "虚拟机列表":
        this.router.navigate(['/user/register'], { queryParams: { ip: this.ip, step: 2 } });
        break;
      case "IP地址修改":
        this.router.navigate(['/user/register'], { queryParams: { ipName: this.ip, step: 3 } });
        break;
    }
  }
  // 自动化应用
  showAutomation() {
    this.showAutomationApplication = !this.showAutomationApplication;
    this.showSystemApplication = false;
    this.showAIApplication = false;
    this.showUserList = false;
  }
  // AI应用
  showAI() {
    this.showAIApplication = !this.showAIApplication;
    this.showSystemApplication = false;
    this.showAutomationApplication = false;
    this.showUserList = false;
  }
  chooseAI(name) {
    switch (name) {
      case "总览":
        sessionStorage.setItem('MENU_INDEX', '10');
        this.router.navigate(['/aicompetence/aiapply/appdetail']);
        break;
    }
  }
  // 用户
  showUser() {
    this.showUserList = !this.showUserList;
    this.showSystemApplication = false;
    this.showAutomationApplication = false;
    this.showAIApplication = false;
  }
  chooseUser(ipName) {
    switch (ipName) {
      case "账号信息":
        this.router.navigate(['/user/home/userinfo']);
        break;
      case "退出登录":
        this.logout();
        break;
    }
  }

}
