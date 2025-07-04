import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const Breadcrumbs = (props) => {
  const renderBreadcrumbs = () => {
    let route = props.url.split('/')
      .slice(1)
      .map(slice => slice
        .split('-')
        .map(word => word.length < 3
          ? word.toUpperCase()
          : word[0].toUpperCase() + word.slice(1))
        .join(' ')
      );

    return route.map((item, index) => {
      let middlewareUrl = "/" + props.url.split("/").slice(1, index + 2).join("/");

      return (
        <BreadcrumbItem key={uuidv4()}>
          {route.length === index + 1
            ? item
            : <Link to={middlewareUrl}>
                {item}
              </Link>
          }
        </BreadcrumbItem>
      )
    })
  }

  const getBreadcrumbsTitle = () => {
    const routeArray = props.url.split("/")
    const title = routeArray[routeArray.length - 1]
    return title[0].toUpperCase() + title.slice(1)
  }

  return (
    <div className="mb-4">
      <div className="headline-2">{getBreadcrumbsTitle()}
        {getBreadcrumbsTitle() !== "Dashboard" &&
          <Breadcrumb tag="nav" listTag="div">
            {renderBreadcrumbs()}
          </Breadcrumb>
        }
      </div>
    </div>
  )
}

export default Breadcrumbs;
